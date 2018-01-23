// 게시글 본문 글씨 크기 조절
function fontSizeCtr(pm){
	var c = $('.uk-article .xe_content');
	if (pm == 'm') {
		var font_size = parseInt(c.css('fontSize'))-1;
		c.css('font-size',''+font_size+'px');
	};
	if (pm == 'p') {
		var font_size = parseInt(c.css('fontSize'))+1;
		c.css('font-size',''+font_size+'px');
	};
}

// SNS post
(function($) {
	"use strict";
	$.fn.snspost = function(opts) {
		var loc = '';
		opts = $.extend({}, {type:'twitter', event:'click', content:''}, opts);
		opts.content = encodeURIComponent(opts.content);
		switch(opts.type) {
			case 'facebook':
				loc = 'http://www.facebook.com/share.php?t='+opts.content+'&u='+encodeURIComponent(opts.url||location.href);
				break;
			case 'delicious':
				loc = 'http://www.delicious.com/save?v=5&noui&jump=close&url='+encodeURIComponent(opts.url||location.href)+'&title='+opts.content;
				break;
			case 'twitter':
				loc = 'http://twitter.com/home?status='+opts.content;
				break;
			case 'google' :
				loc = 'http://plus.google.com/share?url='+encodeURIComponent(opts.url||location.href)+'?l=ko='+opts.content;
				break;
		}
		this.bind(opts.event, function() {
			window.open(loc);
			return false;
		});
	};
	$.snspost = function(selectors, action) {
		$.each(selectors, function(key,val) {
			$(val).snspost( $.extend({}, action, {type:key}) );
		});
	};
})(jQuery);
