define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./billing-history');
	var template = require('html!./billing-history');

	return BaseView.extend({

		initialize: function(){

			this.highlightActiveMenuItem();

		},

		render: function(){

			this.$el.append(template({}));
		
		}
		
	});

});
