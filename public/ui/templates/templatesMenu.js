define(function (require, exports, module) {
	
	var Backbone = require('backbone');
	var BaseView = require('framework/baseView');
	var mediator = require('framework/mediator');
	require('css!./templatesMenu');
	var template = require('html!./templatesMenu');
	

	return Backbone.View.extend({

		el: "#templates-menu-container",

		events: {
			"click #content-filter li a"		: 		"contentFilterSelected",
			"click #duration-filter li a"		: 		"durationFilterSelected",
			"keyup input#style-search-input"	: 		"searchInputOnChange",
			"onchange input#style-search-input"	: 		"searchInputOnChange",
			"click .clear-results"				: 		"clearResults",

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

		},

		searchInputOnChange: function() {

			mediator.trigger('searchTemplates', $("#style-search-input").val());
			$(".clear-results").show();

		},

		clearResults: function() {

			$("#style-search-input").val("");
			mediator.trigger('searchTemplates', $("#style-search-input").val());
			$(".clear-results").hide();


		}
		
	});

});
