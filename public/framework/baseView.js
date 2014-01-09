define(function (require) {

	'use strict';

	require('bootstrap_js');
	require('css!bootstrap_css');
	require('css!ui/_shared/styles/global');
	var Backbone = require('backbone');
	var mediator = require('framework/mediator');
	

	return Backbone.View.extend({

		constructor: function(options){

			this.options = options || {};

			var layoutTemplate = this.options.layoutTemplate;
			if(layoutTemplate){
				this.setElement('[data-el=app]');
				this.$el.html(layoutTemplate({}));
				this.setElement(this.$('[data-el=main]'));
			}

			mediator.trigger('registerView', this);

			this.initialize.apply(this, arguments);

		},

		highlightActiveMenuItem: function() {
			
			var target;
			
			if (Backbone.history.fragment == "") {
			
				target = "my-projects"
			
			} 

			else if(Backbone.history.fragment == "my-account" || Backbone.history.fragment == "billing-history" || Backbone.history.fragment == "logout") {
			
				target = "welcome"
			
			} 

			else {
			
				target = Backbone.history.fragment;
			
			}
			
			$("ul.nav > li."+target).addClass("active");

		},

	});

});