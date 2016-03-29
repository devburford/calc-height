App.CalcHeight = (function() {

  var _getHeight = function() {
    var $block = $('.js-list-block'),
        $tallestBlock = $('.js-tallest'),
        maxHeight = Math.max.apply(
          Math, $tallestBlock.map(function() {
            return $tallestBlock.height();
          }).get());
    $block.height(maxHeight);
  };

  // gets and sets height on initial load
  var _loadHeight = function() {
    $(window).load(function() {
      _getHeight();
    });
  };

  var initialize = function() {
    _getHeight();
    _loadHeight();
  };

  return {
    initialize: initialize
  };

})();
