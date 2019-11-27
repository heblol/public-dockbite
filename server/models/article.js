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

  /**
   * Here the `prototype.like` method is added to the model. This
   * adds an API endpoint '/Articles/:id/like' and makes sure
   * the corresponding method is called.
   *
   * It is a prototype method, which means that it works
   * on an instance of the model, that's why an id must be specified.
   * This also binds the `this` context to the current instance.
   */
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
