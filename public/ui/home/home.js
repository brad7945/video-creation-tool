define(function (require, exports, module) {

	require('css!./home');
	var template = require('html!./home');
	var BaseView = require('framework/baseview');

	return BaseView.extend({
		render: function(){
			$('body').append(template({}));
		}
	});

});
