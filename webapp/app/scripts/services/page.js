'use strict';

/**
 * @ngdoc service
 * @name webappApp.page
 * @description
 * # page
 * Service in the webappApp.
 */
angular.module('webappApp')
  .service('page', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
    var pageSize = 5;
    self.setPageSize = function(size) {
        pageSize = size;
    };
    self.getPageSize = function() {
        return pageSize;
    };
    self.getByPage = function(url, params, callBack) {
            // params.size = pageSize;
            $http.get(url, {
                    params: params
                })
                .then(function(response) {
                    if (response.data.totalPages == 0) {
                        if (params.page != 0) {
                            params.page = 0;
                            self.getByPage(url, params, callBack);
                        }
                    } else {
                        if (params.page > response.data.totalPages - 1) {
                            params.page = response.data.totalPages - 1;
                            self.getByPage(url, params, callBack);

                        } else {
                            callBack(response.data);
                        }
                    }
                }, function(response) {
                    alert('fail ot page');
                });
        };
  });
