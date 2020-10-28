module.exports = function (Article) {
  /**
   * This function adds one like to the article, it then
   * returns the total number of likes.
   * @param {function} cb - Callback function, call cb(val) to
   * @returns {number} Number of likes
   */
  Article.prototype.like = async function () {

    this.likes = this.likes + 1;

    await this.save();

    return this.likes;
  };

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
