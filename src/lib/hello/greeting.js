"use strict";

/**
 * A greeting function.
 *
 * @param value
 * @returns {string}
 */
function greeting(value = 'World') {
  return 'Hello ' + value + '!';
}

module.exports = greeting;
