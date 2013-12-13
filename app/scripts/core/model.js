angular.module('ut.model', []).factory('model', [

    function () {

        var Party = function (members) {
            if (!members) {
                this.members = [];
            } else {
                this.members = members;
            }
            
            this.id = null;
        };
        
        Party.fromJSON = function(data){
            var party = new model.Party(data.members);
            party.id = data.id;            
        };
        
        var Character = function() {
            this.name = null;
            this.profession = null;
            this.race = null;
            this.equipment = [];
            this.attributes = new CharacterAttributes();
            this.portait = null;
            this.skills = [];
            this.items = [];
        };
        
        var CharacterAttributes = function () {};

        var _ItemType = function() {
            var self = this;
            self.Helmet = 1;
            self.Armor = 2;
            self.Shield = 3;
            self.Greaves = 4;
            self.MeleeWeapon = 5;
            self.RangedWeapon = 6;
        };

        var ItemType = new _ItemType();

        function Item(id, name, type, cost, properties) {
            var self = this;
            self.id = id;
            self.name = name;
            self.type = type;
            self.cost = cost;
            self.properties = properties;

        }
                
        var isMelee = function(x){ 
            return x.type == ItemType.MeleeWeapon; 
        };
        
        var isRanged = function(x){
            return x.type == ItemType.RangedWeapon; 
        };
        
        var isShield = function(x){
            return x.type == ItemType.Shield; 
        };

        Item.prototype.isWeapon = function () {
            return this.type == ItemType.MeleeWeapon || this.type == ItemType.RangedWeapon;
        };

        Item.prototype.isRangedWeapon = function () {
            return this.type == ItemType.RangedWeapon;
        };

        Item.prototype.isArmor = function () {
            return this.type == ItemType.Helmet || this.type == ItemType.Shield || this.type == ItemType.Greaves || this.type == ItemType.Armor;
        };
        
                    
        Item.prototype.canBeUsedBy = function(character){
            var self = this;
            
            if (_.some(character.equipment, function(x){ return x.id == self.id; })){
                return false;   
            }
            
            return self.properties.canBeUsedBy(character, self.type);
        };

        function _ArmorClass() {
            var self = this;
            self.Light = 1;
            self.Heavy = 2;
        }

        var ArmorClass = new _ArmorClass();

        var ArmorProperties = function(armorClass) {
            var self = this;
            
            self.armorClass = armorClass;
            
            self.canBeUsedBy = function (character, itemType) {
                var eq = character.equipment;
                
                if (_.some(eq, function(x){ return x.id == self.id; })){
                    return false;   
                }                
                
                if (itemType == ItemType.Helmet && 
                    _.some(eq, function (x) {
                        return x.type == ItemType.Helmet;
                })) {
                    return false;
                }

                if (itemType == ItemType.Greaves && 
                    _.some(eq, function (x) {
                        return x.type == ItemType.Greaves;
                })) {
                    return false;
                }

                if (itemType == ItemType.Armor && 
                    _.some(eq, function (x) {
                        return x.type == ItemType.Armor;
                })) {
                    return false;
                }

                if (itemType == ItemType.Shield && 
                    (_.some(eq, function (x) { return isShield(x) || (isMelee(x) && (x.isTwoHanded || x.isLight)); }) || 
                     _.some(eq, isMelee))) {
                    return false;
                }

                if (self.armorClass == ArmorClass.Heavy) {
                    if (character.profession) {
                        return character.profession.cost > 35;
                    }
                }

                return true;
            };
        };

        var MeleeWeaponProperties = function(normalAttackMod, strengthAttackMod, precisionAttackMod, counterAttack, isTwoHanded, isLight) {
            var self = this;
            self.normalAttackMod = normalAttackMod;
            self.strengthAttackMod = strengthAttackMod;
            self.precisionAttackMod = precisionAttackMod;
            self.counterAttack = counterAttack;
            self.isTwoHanded = isTwoHanded;
            self.isLight = isLight;
            
            self.canBeUsedBy = function (character) {
                var eq = character.equipment;
                
                if (_.some(eq, function(x){ return x.id == self.id; })){
                    return false;   
                }

                if (_.some(eq, function (x) { return isMelee(x) && x.isTwoHanded; }) || 
                    _.filter(eq, function (x) { return isRanged(x) || isMelee(x) || isShield(x); }).length > 1) {
                    return false;
                }

                if (self.isTwoHanded) {
                    if (_.some(eq, isShield)) {
                        return false;
                    }

                    if (_.some(eq, isMelee)) {
                        return false;
                    }
                }

                if (self.isLight) {
                    if (_.some(eq, isShield)) {
                        return false;
                    }
                }

                return true;
            };
        };

        var RangedWeaponProperties = function(dmg, range, isArmorPiercing) {
            var self = this;
            self.damage = dmg;
            self.range = range;
            self.isArmorPiercing = isArmorPiercing;
            
            self.canBeUsedBy = function (character) {
                var eq = character.equipment;

                if (_.some(eq, function(x){ return x.id == self.id; })){
                    return false;   
                }                
                
                if (_.some(eq, isRanged) ||
                   _.filter(eq, function (x) { return isRanged(x) || isMelee(x) || isShield(x); }).length > 1) {
                    return false;
                }

                return true;
            };
        };

        return {
            "ItemType": ItemType,
            "Item": Item,
            "ArmorClass": ArmorClass,
            "ArmorProperties": ArmorProperties,
            "MeleeWeaponProperties": MeleeWeaponProperties,
            "RangedWeaponProperties": RangedWeaponProperties,
            "Character": Character
        };
    }
]);