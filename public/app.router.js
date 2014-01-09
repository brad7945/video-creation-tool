define(function (require, exports, module) {

	var Backbone = require('backbone');
	var mediator = require('framework/mediator');

	var appLayoutTemplate = require('html!ui/_shared/layouts/app');

	return Backbone.Router.extend({

		routes: {
			'': 'home',
		},

		home: function(){
			require(['ui/home/home'], function(Home){

				new Home({
					layoutTemplate: appLayoutTemplate
				}).render();
			});
		},

	});

});
