(function($) {
  $.toSentence = function(array, options) {
    options = jQuery.extend({}, options);
    options.two_words_connector = options.two_words_connector || " and "
    options.last_word_connector = options.last_word_connector || " and "
    options.words_connector = options.words_connector || ", "

    var size = array.length;
    var last_word_connector = (size == 2) ? options.two_words_connector : options.last_word_connector;

    if (size == 1) { return array[0] }
    return array.slice(0, size-1).join(options.words_connector) + last_word_connector + array[size-1]
  }
})(jQuery);
