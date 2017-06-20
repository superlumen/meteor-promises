/**
 * Call a Meteor synchronous method and return a promise
 * @param {Object} object - The object upon which to call the mthod
 * @param {String} methodName - The name of the method to call
 * @param {...} args - The arguments to pass to the method
 * @returns {Promise} - A promise from Meteor's core Promise implementation
 */
export const wrapSyncMethod = function(object, methodName, ...args) {
  return Promise.resolve(true).then(function() {
    return object[methodName](...args);
  });
};

/**
 * Wrap a core meteor synchronous function to return a promise
 * @param {Function} fn - The core Meteor function to be wrapped
 * @param {Any} args - The arguments to be passed to the function
 * @returns {Promise} - A Meteor core Promise that will resolve to the function return value or throw the error
 */
export const wrapSyncFunction = function(fn, ...args) {
  return Promise.resolve(true).then(function() {
    return fn(...args);
  });
};
