define(function (require, exports, module) {
	
	var Backbone = require('backbone');
	require('css!./templatesMenu');
	var template = require('html!./templatesMenu');
	

	return Backbone.View.extend({

		el: "#templates-menu-container",

		render: function(){

			this.$el.html(template({}))

		}
		
	});

});
