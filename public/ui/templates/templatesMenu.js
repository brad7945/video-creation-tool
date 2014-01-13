define(function (require, exports, module) {
	
	var Backbone = require('backbone');
	require('css!./templatesMenu');
	var template = require('html!./templatesMenu');
	

	return Backbone.View.extend({

		el: "#templates-menu-container",

		events: {
			"click #content-filter li a"	: 		"contentFilterSelected",
			"click #duration-filter li a"	: 		"durationFilterSelected",

		},

		render: function(options){

			this.$el.html(template({}))

			if(options.contentType.length) {
				$("#content-type-filter-results").html(options.contentType)	
			}
			
			if(options.duration.length) {
				$("#duration-filter-results").html(options.duration)
			}
			

		},

		contentFilterSelected: function (e){

			var id = e.currentTarget.id;
			if (id !== undefined) {
				$("#content-type-filter-results").html(id);
				this.filterApplied();
			}			
		
		},

		durationFilterSelected: function (e){

			var id = e.currentTarget.id;
			if (id !== undefined) {
				$("#duration-filter-results").html(id);
				this.filterApplied();
			}
		
		},

		filterApplied: function() {

			var contentType = $("#content-type-filter-results").html();
			var duration = $("#duration-filter-results").html();

			window.location='#templates/contentType/'+contentType+'/duration/'+duration;

		}
		
	});

});
