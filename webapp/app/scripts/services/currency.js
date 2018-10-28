'use strict';

/**
 * @ngdoc service
 * @name webappApp.currency
 * @description
 * # currency
 * Service in the webappApp.
 */
angular.module('webappApp')
	.service('currency', function() {
		// AngularJS will instantiate a singleton by calling "new" on this function
		var self = this;
		/**
		 * determine whether an entity is in an array
		 * @param entity 
		 * @return {boolean}
		 */
		self.inEntityArray = function(entity, entityArray) {
			var result = false;
			angular.forEach(entityArray, function(value) {
				if (value && entity) {
					if (value.id === entity.id) {
						result = true;
					}
				}
			});
			return result;
		};
		/**
		 * add a entity to the entityArray
		 * @param {entity} entity      
		 * @param {entityArray} entityArray 
		 */
		self.addEntityArray = function(entity, entityArray) {
			if (!self.inEntityArray(entity, entityArray)) {
				entityArray.push(entity);
			}
		};
		/**
		 * Expand the size of an expand to target array size and place in afterExpand
		 * @param  {[array]} expand     
		 * @param  {[array]} target     
		 * @param  {[afterExpand]} afterExpand           
		 */
		self.expandArray = function(expand, target, afterExpand) {
			angular.forEach(target, function(value, key) {
				if (self.inEntityArray(value, expand)) {
					afterExpand[key] = value;
				} else {
					afterExpand[key] = null;
				}
			});
		};
	});