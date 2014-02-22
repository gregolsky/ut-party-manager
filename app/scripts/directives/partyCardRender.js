angular.module('ut.directives')
    .directive('partyCardRender', ['$q', 'naturesLookup', 'racesLookup', 'professionsLookup', 'itemsLookup', 'cssHelper',
        function ($q, natures, races, professions, items, css) {
            'use strict';

            var CARD_SELECTOR = '.party-card';

            var FieldCoords = function (x, y, maxWidth) {
                this.x = x;
                this.y = y;
                this.maxWidth = maxWidth || null;
            }

            var buildCoords = function (x, y, maxWidth) {
                return new FieldCoords(x, y, maxWidth);
            }

            var CHARACTER_CARDS = [
             buildCoords(3, 125),
             buildCoords(3, 587),
             buildCoords(3, 1048),
             buildCoords(1034, 125),
             buildCoords(1034, 587),
             buildCoords(1034, 1048)
            ];

            var CHARACTER_FIELDS = {
                name: buildCoords(24, 300),
                race: buildCoords(24, 353),
                profession: buildCoords(24, 406),
                raceSkill: buildCoords(335, 353),
                professionSkill: buildCoords(335, 406),
                ld: buildCoords(380, 35),
                m: buildCoords(380, 69),
                ws: buildCoords(380, 103),
                s: buildCoords(380, 137),
                sp: buildCoords(380, 171),
                bs: buildCoords(380, 205),
                t: buildCoords(380, 239),
                w: buildCoords(380, 273),
                weapon: buildCoords(437, 50),
                armor: buildCoords(437, 138),
                equipment: buildCoords(437, 225),
                psychology: buildCoords(592, 335),
                portraitStart: buildCoords(57, 10),
                portraitEnd: buildCoords(258, 248),
                points: buildCoords(220, 220),
            };

            var PARTY_FIELDS = {
                partyName: buildCoords(20, 75),
                nature: buildCoords(460, 75),
                guild: buildCoords(1255, 75),
                points: buildCoords(1550, 75)
            };

            var loadImage = function (src) {
                var q = $q.defer();

                var img = new Image();
                img.onload = function () {
                    q.resolve(img);
                };

                img.src = src;

                return q.promise;
            };

            CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius, fill, stroke) {
                if (typeof stroke == "undefined") {
                    stroke = true;
                }
                if (typeof radius === "undefined") {
                    radius = 5;
                }
                this.beginPath();
                this.moveTo(x + radius, y);
                this.lineTo(x + width - radius, y);
                this.quadraticCurveTo(x + width, y, x + width, y + radius);
                this.lineTo(x + width, y + height - radius);
                this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                this.lineTo(x + radius, y + height);
                this.quadraticCurveTo(x, y + height, x, y + height - radius);
                this.lineTo(x, y + radius);
                this.quadraticCurveTo(x, y, x + radius, y);
                this.closePath();
                if (stroke) {
                    this.stroke();
                }
                if (fill) {
                    this.fill();
                }
            }

            var cardImageLoading = loadImage(css.getBackgroundImageUrl(CARD_SELECTOR));

            var link = function (scope, element, attrs) {

                if (!scope.party) {
                    return;
                }

                var canvas = document.createElement('canvas');

                element.append(canvas);

                scope.$watch('party', function (party) {
                    cardImageLoading
                        .then(function (img) {
                            render(img, party);
                        });
                }, true);

                var render = function (cardImg, party) {
                    canvas.width = cardImg.width;
                    canvas.height = cardImg.height;

                    var context = canvas.getContext('2d');
                    context.drawImage(cardImg, 0, 0);
                    context.font = "18px Georgia";

                    var renderText = function (text, coords) {
                        context.fillText(text, coords.x, coords.y);
                    };

                    var renderImage = function (img, start, end) {
                        context.drawImage(img, 0, 0, img.width, img.height, start.x, start.y, end.x - start.x, end.y - start.y);
                    };

                    renderText(party.name, PARTY_FIELDS.partyName);
                    renderText(party.nature ? natures[party.nature].name : '', PARTY_FIELDS.nature);
                    renderText(party.guild, PARTY_FIELDS.guild);
                    renderText(party.points, PARTY_FIELDS.points);

                    var renderCharacter = function (character, cardCoords) {
                        var fields = CHARACTER_FIELDS;

                        var adjustToCard = function (fieldsCoords) {
                            return new FieldCoords(fieldsCoords.x + cardCoords.x, fieldsCoords.y + cardCoords.y);
                        };

                        var renderCharacterText = function (text, fieldCoords) {
                            renderText(text, adjustToCard(fieldCoords));
                        };

                        var renderCharacterPortrait = function () {
                            var portraitSrc = css.getBackgroundImageUrl('.' + (character.portrait || 'default'));
                            loadImage(portraitSrc)
                                .then(function (img) {
                                    renderImage(img, adjustToCard(CHARACTER_FIELDS.portraitStart), adjustToCard(CHARACTER_FIELDS.portraitEnd));
                                });
                        };

                        renderCharacterText(character.name, CHARACTER_FIELDS.name);

                        var race = races[character.race];
                        var profession = professions[character.profession];

                        if (race) {
                            var attrs = race.attributes;
                            renderCharacterText(race.name, CHARACTER_FIELDS.race);
                            renderCharacterText(race.talent, CHARACTER_FIELDS.raceSkill);
                            renderCharacterText(attrs.command, CHARACTER_FIELDS.ld);
                            renderCharacterText(attrs.mobility, CHARACTER_FIELDS.m);
                            renderCharacterText(attrs.normalCombat, CHARACTER_FIELDS.ws);
                            renderCharacterText(attrs.strength, CHARACTER_FIELDS.s);
                            renderCharacterText(attrs.condition, CHARACTER_FIELDS.sp);
                            renderCharacterText(attrs.rangeWeapons, CHARACTER_FIELDS.bs);
                            renderCharacterText(attrs.toughness, CHARACTER_FIELDS.t);
                            renderCharacterText(attrs.vitality, CHARACTER_FIELDS.w);
                        }

                        if (profession) {
                            renderCharacterText(profession.name, CHARACTER_FIELDS.profession);
                            renderCharacterText(profession.talent, CHARACTER_FIELDS.professionSkill);
                        }

                        var describeFilteredEq = function (filter) {
                            return _(character.equipment)
                                .map(function (id) {
                                    return items[id];
                                })
                                .filter(filter)
                                .map(function (x) {
                                    return x.name;
                                })
                                .value()
                                .join(", ");
                        };

                        var weapons = describeFilteredEq(function (x) {
                            return x.isWeapon();
                        });
                        var armor = describeFilteredEq(function (x) {
                            return x.isArmor();
                        });
                        
                        var other = describeFilteredEq(function (x) {
                            return x.isEquipment();
                        });

                        renderCharacterText(weapons, CHARACTER_FIELDS.weapon);
                        renderCharacterText(armor, CHARACTER_FIELDS.armor);
                        renderCharacterText(other, CHARACTER_FIELDS.equipment);
                        renderCharacterText("?", CHARACTER_FIELDS.psychology);
                        
                        renderCharacterPortrait();                        
                    };

                    _.each(party.members, function (e, i) {
                        if (i > 5) {
                            return;
                        }

                        renderCharacter(party.members[i], CHARACTER_CARDS[i]);
                    });
                };
            };

            return {
                restrict: 'A',
                transclude: true,
                link: link
            };
    }]);