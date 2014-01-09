define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./logout');
	var template = require('html!./logout');

	return BaseView.extend({
		render: function(){
			this.$el.append(template({}));
		}
	});

});
