define(function (require, exports, module) {
	
	var Backbone = require('backbone');
	var BaseView = require('framework/baseView');
	var mediator = require('framework/mediator');
	require('css!./templatesMenu');
	var template = require('html!./templatesMenu');
	

	return Backbone.View.extend({

		el: "#templates-menu-container",
		contentFilter: "",
		durationFilter: "",

		events: {
			"click #get-all-templates-btn"		: 		"getAllTemplates",
			"click #sort-by-content"			: 		"sortByContentExpand", 
			"click #sort-by-duration"			: 		"sortByDurationExpand", 
		    "click #content-filter li a"        :       "contentFilterSelected",
   	        "click #duration-filter li a"       :       "durationFilterSelected",
			"keyup input#style-search-input"	: 		"searchInputOnChange",
			"onchange input#style-search-input"	: 		"searchInputOnChange",
			"click .clear-results"				: 		"clearResults",

		},

		render: function(options){
			
			this.$el.html(template({}))
			
		},

		getAllTemplates: function() {

			$("#get-all-templates-btn").parent("li").addClass("active")
			$(".templates-nav li").removeClass("active");
			mediator.trigger('getAllTemplates', this);

		},

		sortByContentExpand: function(){

			$(".templates-nav li").removeClass("active");
			$("#sort-by-content").parent("li").addClass("active")

		},

		sortByDurationExpand: function(){

			$(".templates-nav li").removeClass("active");
			$("#sort-by-duration").parent("li").addClass("active")

		},

		contentFilterSelected: function (e){

			var id = e.currentTarget.id;
			if (id !== undefined) {
				this.contentFilter = id;
				this.filterApplied();
			}			
		
		},

		durationFilterSelected: function (e){

			var id = e.currentTarget.id;
			if (id !== undefined) {
				this.durationFilter = id;
				this.filterApplied();
			}
		
		},

		filterApplied: function() {

			var baseUrl = '#templates';
			var params = '';
			if (this.contentFilter !== "") {
				params += "/contentType/"+this.contentFilter;
			}
			if (this.durationFilter !== "") {
				params += "/duration/"+this.durationFilter;
			}
			var finalUrl = baseUrl + params;
			console.log(finalUrl)
			window.location = finalUrl;

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
