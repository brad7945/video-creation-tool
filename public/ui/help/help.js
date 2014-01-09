define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./help');
	var template = require('html!./help');

	return BaseView.extend({

		initialize: function(){

			this.highlightActiveMenuItem();

		},
		
		render: function(){
		
			this.$el.append(template({}));
		
		}

	});

});
