
angular.module('LocalStorageModule').value('prefix', 'ut');

angular.module('ut.backend.storage', ['LocalStorageModule']);
angular.module('ut.backend', ['ut.backend.storage', 'ngMockE2E']);

angular.module('ut.core', []);
angular.module('ut.core.constants', ['ut.core']);
angular.module('ut.core.services', ['ut.core.constants']);

angular.module('ut.helpers', []);
angular.module('ut.directives', ['ut.helpers']);

angular.module('ut.filters', []);

angular.module('ut.services', ['ut.core', 'ut.core.constants', 'ut.core.services', 'ngResource']);
