$.fn.anchor = function(options) {

  var defaults = {
    headingClass: 'anchored',
    anchorClass:  'anchor',
    symbol:       '¶',
    maxLength:    30
  }

  var opt = $.extend({}, defaults, options),
      elements = $(this),
      usedNames = [];

  var cleanName = function (name) {
    var cleaned = name.replace(/[^a-z0-9\s]/gi, '')
                      .replace(/[_\s]/g, '-')
                      .replace(/ /g, '-').toLowerCase();
    return cleaned;
  }

  elements.each(function() {
    var self = $(this),
        name = self.text(),
        count = 1,
        id;

    /**
     *  Strip away unwanted characters
     */
    if(name.length > opt.maxLength) name = name.substring(0,opt.maxLength);
    name = cleanName(name);

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
