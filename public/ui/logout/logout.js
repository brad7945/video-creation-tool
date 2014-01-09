define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./logout');
	var template = require('html!./logout');

	return BaseView.extend({

		initialize: function(){

			this.highlightActiveMenuItem();

		},

		render: function(){

			this.$el.append(template({}));

		}
	
	});

});
