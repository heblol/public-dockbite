module.exports = function (Article) {
  /**
   * This function adds one like to the article, it then
   * returns the total number of likes.
   * @param {function} cb - Callback function, call cb(val) to
   * @returns {number} Number of likes
   */
  Article.prototype.like = function (cb) {
    /**
     * Implement a method here to like the article. There is no
     * property on the model yet to keep track of the likes, so that
     * will have to be added first.
     *
     * Note that the current instance of the model can be accessed
     * by `this` (since this is a prototype function)
     *
     * After incrementing the number of likes, return the total number
     * of likes.
     */

    /**
     * Call callback, i.e. return. First argument is an optional error,
     * can be ignored for now. Second argument is the return value.
     * This is now 0 as a placeholder, but should contain the number
     * of likes.
     */
    cb(null, 0)
  }

  Article.remoteMethod('prototype.like', {
    http: {
      verb: 'PATCH'
    },
    returns: {
      arg: 'likes',
      type: 'number'
    }
  })
}
