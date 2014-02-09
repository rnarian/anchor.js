$(function() {
  var elements = $('h1,h2,h3,h4,h5,h6'),
      usedNames = [];

  elements.each(function() {
    var self = $(this),
        name = self.text(),
        count = 1,
        id;

    name = name.replace(/[^a-z0-9\s]/gi, '')
               .replace(/[_\s]/g, '-')
               .replace(/ /g, '-').toLowerCase();

    if (usedNames[name] >= 1) {
      count = usedNames[name] + 1;
      id = name + '-' + count;
    } else {
      id = name;
    }

    self.addClass('anchored');
    self.attr('id', id);

    self.append('<a class="anchor" href="#' + id + '"> ¶ </a>');

    usedNames[name] = count;
  });
});
