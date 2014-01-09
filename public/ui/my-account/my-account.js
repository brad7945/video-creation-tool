define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./my-account');
	var template = require('html!./my-account');

	return BaseView.extend({

		initialize: function(){

			this.highlightActiveMenuItem();

		},

		render: function(){

			this.$el.append(template({}));

		}

	});

});
