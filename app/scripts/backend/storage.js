angular.module('LocalStorageModule').value('prefix', 'ut');

var storage = angular.module('ut.backend.storage', ['LocalStorageModule']);

storage.factory(
    'storageService', ['localStorageService',
                 function (localStorageService) {

            var IDS_POSTFIX = "_ids";

            var digest = function (entity) {
                return {
                    id: entity.id,
                    name: entity.name
                };
            };
                     
            var getId = function(x){
              return x.id;  
            };
                     
            var idEquals = function(id, comp){
                return id == comp;   
            }

            var entityDigestsKey = function (entityName) {
                return entityName + IDS_POSTFIX;
            };

            var getEntityDigests = function (entityName) {
                return angular.fromJson(localStorageService.get(entityDigestsKey(entityName)));
            };

            var setEntityDigests = function (entityName, ids) {
                localStorageService.set(entityDigestsKey(entityName), angular.toJson(ids));

            };

            var newId = function (entityName) {
                var ids = _(getEntityDigests(entityName) || [])
                    .map(getId)
                    .value();

                var result = ids.length ? _.max(ids) + 1 : 0;
                return result + 1;
            }

            var entityKey = function (entityName, id) {
                return entityName + "_" + (id || newId(entityName));
            }

            var load = function (entityName, id) {
                return angular.fromJson(
                    localStorageService.get(
                        entityKey(entityName, id)));
            };
                     
            var remove = function (entityName, id) {
                localStorageService.set(entityKey(entityName, id), null);

                var digests = _.filter(getEntityDigests(entityName), function (x) { return x.id != id; });
                setEntityDigests(entityName, digests);
            };

            var writeLock = false;

            var save = function (entityName, entity) {

                if (writeLock) {
                    throw "!";
                }

                writeLock = true;

                var digests = getEntityDigests(entityName) || [];
                if (!entity.id) {
                    entity.id = newId(entityName);
                    digests.push(digest(entity));
                    setEntityDigests(entityName, digests);
                }
                else {
                    var d = _.find(digests, function (x) { return x.id == entity.id });
                    d.name = entity.name;
                }
                
                setEntityDigests(entityName, digests);

                localStorageService.set(entityKey(entityName, entity.id), entity);

                writeLock = false;

                return entity;
            };

            var list = function (entityName) {
                return getEntityDigests(entityName);
            };

            return {
                load: load,
                save: save,
                list: list,
                remove: remove
            };
}]);