define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./photos-videos');
	var template = require('html!./photos-videos');

	return BaseView.extend({

		initialize: function(){

			this.highlightActiveMenuItem();

		},

		render: function(){
		
			this.$el.append(template({}));
		
		}
		
	});

});
