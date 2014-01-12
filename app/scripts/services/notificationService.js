/*jslint browser: true */

angular.module('ut.services')
    .factory('notificationService', [
        '$q',
        '$timeout',
        function ($q, $timeout) {
            'use strict';

            var NotificationService,
                notify,
                NOTIFICATION_TIMEOUT = 3000;

            var NotificationService = function () {
                this.notifications = null;
            };

            var notify = function (notifications, title, text, type) {
                
                if (!notifications) {
                    throw "Notifications collection was not initiated.";
                }
                
                notifications.push({
                    title: title,
                    text: text,
                    type: type
                });

                $timeout(function () {
                        notifications.pop();
                    },
                    NOTIFICATION_TIMEOUT);
            };


            NotificationService.prototype.notifyDanger = function (title, text) {
                notify(this.notifications, title, text, 'danger');
            };


            NotificationService.prototype.notifySuccess = function (title, text) {
                notify(this.notifications, title, text, 'success');
            };

            NotificationService.prototype.setCollection = function (notifications) {
                this.notifications = notifications;
            };

            return new NotificationService();
}]);