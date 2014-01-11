/*jslint browser: true */

var angular = window.angular,
    _ = window._;

angular.module('ut.backend.storage')
    .factory('storageService', [
        'localStorageService',
        function (localStorageService) {
            'use strict';

            var IDS_POSTFIX = "_ids",

                digest,
                getId,
                idEquals,
                entityDigestsKey,
                getEntityDigests,
                setEntityDigests,
                newId,
                entityKey,

                save,
                load,
                remove,
                list,

                writeLock = false;

            digest = function (entity) {
                return {
                    id: entity.id,
                    name: entity.name
                };
            };

            getId = function (x) {
                return x.id;
            };

            idEquals = function (id, comp) {
                return id === comp;
            };

            entityDigestsKey = function (entityName) {
                return entityName + IDS_POSTFIX;
            };

            getEntityDigests = function (entityName) {
                var data = localStorageService.get(entityDigestsKey(entityName));
                return angular.fromJson(data) || [];
            };

            setEntityDigests = function (entityName, ids) {
                localStorageService.set(entityDigestsKey(entityName), angular.toJson(ids));
            };

            newId = function (entityName) {
                var ids, result;

                ids = _(getEntityDigests(entityName) || [])
                    .map(getId)
                    .value();

                result = ids.length ? _.max(ids) + 1 : 0;

                return result + 1;
            };

            entityKey = function (entityName, id) {
                return entityName + "_" + (id || newId(entityName));
            };

            load = function (entityName, id) {
                return angular.fromJson(localStorageService.get(entityKey(entityName, id)));
            };

            remove = function (entityName, id) {
                localStorageService.remove(entityKey(entityName, id));

                var digests = _.filter(getEntityDigests(entityName), function (x) {
                    return x.id !== id;
                });
                setEntityDigests(entityName, digests);
            };

            save = function (entityName, entity) {

                var digests, entityDigest;

                if (writeLock) {
                    throw "!";
                }

                writeLock = true;

                digests = getEntityDigests(entityName) || [];

                if (!entity.id) {
                    entity.id = newId(entityName);
                    digests.push(digest(entity));
                    setEntityDigests(entityName, digests);
                } else {
                    entityDigest = _.find(digests, function (x) {
                        return x.id === entity.id;
                    });

                    entityDigest.name = entity.name;
                }

                setEntityDigests(entityName, digests);

                localStorageService.set(entityKey(entityName, entity.id), entity);

                writeLock = false;

                return entity;
            };

            list = function (entityName) {
                return getEntityDigests(entityName);
            };

            return {
                load: load,
                save: save,
                list: list,
                remove: remove
            };
        }]);