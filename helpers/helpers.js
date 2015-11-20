module.exports.register = function(handlebars, config) {
  handlebars.registerHelper('markupclean', function(markup) {
    var tmp =  markup.replace(/(?=<!-- IGNORE -->)(?:\r|\n|.)+?(<!-- ENDIGNORE -->)/g, '');
    return tmp;
  });

  handlebars.registerHelper('toid', function(name) {
    return name.replace('.', '').replace(' ', '-').toLowerCase();
  });
};
