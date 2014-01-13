define(function (require, exports, module) {
	
	var Backbone = require('backbone');
	require('css!./templatesMenu');
	var template = require('html!./templatesMenu');
	

	return Backbone.View.extend({

		el: "#templates-menu-container",

		events: {
			//"click li a": "filterSelected"
		},

		render: function(){

			this.$el.html(template({}))

		},

		filterSelected: function (e){

			var id = $(e.currentTarget).data("id");
			if (id !== undefined) {
				console.log(id);
			}
			
		
		}
		
	});

});
