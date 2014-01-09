define(function (require, exports, module) {

	var BaseView = require('framework/baseView');
	var Holder = require('holderjs');
	
	require('css!./templates');
	var template = require('html!./templates');

	return BaseView.extend({

		initialize: function(){

			this.highlightActiveMenuItem();

		},

		render: function(){
		
			this.$el.append(template({}));
			Holder.run();
			// activate the tool tips for this view
			$(".preview-video-tooltip").tooltip();
			$(".create-video-tooltip").tooltip();

		}
		
	});

});
