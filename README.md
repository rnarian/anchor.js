# anchor.js

jQuery plugin that automatically creates unique anchor links for headlines, paragraphs or other specified elements. 

See a [demo on codepen](http://codepen.io/rnarian/pen/Csadr/).

## Installation

Include **anchor.js** after the jQuery library:

    <script src="/path/to/anchor.min.js"></script>

## Usage

    $('h1, h2, .huge-heading').anchor();

**anchor.js** then applies a unique anchor link to each element.

So `<h1>Heading</h1>` would become: 

    <h1 class="anchored" id="heading">Heading <a class="anchor" href="#heading">¶</a></h1>

### Options

    $('h1, h2, .huge-heading').anchor({
        headingClass: 'heading-class', // default is 'anchored'
        anchorClass:  'anchor-class',  // default is 'anchor'
        symbol:       '→',             // default is '¶'
        maxLength:    30               // default is 100
    });
