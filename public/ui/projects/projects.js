define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./projects');
	var template = require('html!./projects');

	return BaseView.extend({

		initialize: function(){

			this.highlightActiveMenuItem();

		},

		render: function(){

			this.$el.append(template({}));
			
		}
	});

});
