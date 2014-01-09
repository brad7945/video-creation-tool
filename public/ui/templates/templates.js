define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./templates');
	var template = require('html!./templates');

	return BaseView.extend({

		initialize: function(){

			this.highlightActiveMenuItem();

		},

		render: function(){
		
			this.$el.append(template({}));
		}
		
	});

});
