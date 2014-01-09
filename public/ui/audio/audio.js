define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./audio');
	var template = require('html!./audio');

	return BaseView.extend({

		initialize: function(){

			this.highlightActiveMenuItem();

		},

		render: function(){
		
			this.$el.append(template({}));
		
		}

	});

});
