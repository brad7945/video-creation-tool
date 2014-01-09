define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./templates');
	var template = require('html!./templates');

	return BaseView.extend({
		render: function(){
			this.$el.append(template({}));
		}
	});

});
