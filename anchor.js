$.fn.anchor = function(options) {

  var defaults = {
    headingClass: 'anchored',
    anchorClass:  'anchor',
    symbol:       '¶'
  }

  console.log($(this));

  var opt = $.extend({}, defaults, options),
      elements = $(this),
      usedNames = [];

  elements.each(function() {
    var self = $(this),
        name = self.text(),
        count = 1,
        id;

    /**
     *  Strip away unwanted characters
     */
    name = name.replace(/[^a-z0-9\s]/gi, '')
               .replace(/[_\s]/g, '-')
               .replace(/ /g, '-').toLowerCase();

    /**
     *  Make sure anchor isn't already in use
     */
    if (usedNames[name] >= 1) {
      count = usedNames[name] + 1;
      id = name + '-' + count;
    } else {
      id = name;
    }

    /**
     *  Set anchor id and class name
     */
    self.addClass(opt.headingClass)
        .attr('id', id);

    /**
     *  Append clickable anchor
     */
    self.append('<a class="' + opt.anchorClass + '" href="#' + id + '">' + opt.symbol + '</a>');

    /**
     *  Update count of used name
     */
    usedNames[name] = count;
  });
};
