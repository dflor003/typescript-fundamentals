
/**
 * Sets a key's value.
 *
 * @param key Key to set. If this value is not set or not
 *              a string an exception is raised.
 * @param value Value to set. This can be any value that is JSON
 *              compatible (Numbers, Strings, Objects etc.).
 * @param [options] - possible options to use
 * @param [options.TTL] - optional TTL value
 * @return the used value
 */

/**
 * Looks up a key in cache
 *
 * @param key - Key to look up.
 * @param defaultIfNotFound - Default value to return, if key didn't exist.
 * @return the key value, default value or null
 */

/**
 * Deletes a key from cache.
 *
 * @param key - Key to delete.
 * @return true if key existed or false if it didn't
 */