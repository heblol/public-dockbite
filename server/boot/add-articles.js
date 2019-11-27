
/**
 * Create a few mock-up articles
 */
module.exports = async function(app) {
  const Article = app.models.Article;

  await Article.create({
    title: "Lorem",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus turpis vitae nisi euismod cursus. Morbi vulputate tortor eleifend sodales ullamcorper. Morbi lobortis nisl non dui consequat vehicula. Aliquam erat volutpat. Aliquam mattis dui risus, in ornare augue egestas ut. Vestibulum non velit tortor. Etiam non varius dui, eget efficitur leo. Nulla sagittis consectetur dignissim."
  });

  await Article.create({
    title: "The fox",
    body: "The quick brown fox jumps over the lazy dog."
  })
}
