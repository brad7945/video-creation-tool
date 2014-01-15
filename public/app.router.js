define(function (require, exports, module) {

	var Backbone = require('backbone');
	var mediator = require('framework/mediator');
	var appLayoutTemplate = require('html!ui/_shared/layouts/app');

	return Backbone.Router.extend({

		routes: {
			''					: 	'my_projects',
			'my-projects'		: 	'my_projects',
    		//'templates'			:   'templates',
    		"templates(/contentType/:contentType)(/duration/:duration)": "templates",
			'photos-videos'		: 	'photos_videos',
			'audio'				: 	'audio',
			'my-account'		: 	'my_account',
			'billing-history'	: 	'billing_history',
			'logout'			: 	'logout',
			'help'				: 	'help',
		},

		home: function(){

			require(['ui/home/home'], function(Home){

				new Home({
					layoutTemplate: appLayoutTemplate
				}).render();

			
			});
			
		},

		my_projects: function(){

			require(['ui/projects/projects'], function(Projects){

				new Projects({
					layoutTemplate: appLayoutTemplate
				}).render();

			
			});
			
		},

		templates: function(_contentType, _duration){

			var contentType = "all";
			var duration = "all";

			if (_contentType !== null) {
				contentType = _contentType;
			}

			if (_duration !== null) {
				duration = _duration;
			}

			require(['ui/templates/templatesLayoutView'], function(TemplatesLayoutView){

				new TemplatesLayoutView({layoutTemplate: appLayoutTemplate, contentType : contentType, duration : duration })

			
			});
			
		},

		photos_videos: function(){

			require(['ui/photos-videos/photos-videos'], function(PhotosVideos){

				new PhotosVideos({
					layoutTemplate: appLayoutTemplate
				}).render();

			
			});
			
		},

		audio: function(){

			require(['ui/audio/audio'], function(Audio){

				new Audio({
					layoutTemplate: appLayoutTemplate
				}).render();

			
			});
			
		},

		my_account: function(){

			require(['ui/my-account/my-account'], function(MyAccount){

				new MyAccount({
					layoutTemplate: appLayoutTemplate
				}).render();

			
			});
			
		},

		billing_history: function(){

			require(['ui/billing-history/billing-history'], function(BillingHistory){

				new BillingHistory({
					layoutTemplate: appLayoutTemplate
				}).render();

			
			});
			
		},

		logout: function(){

			require(['ui/logout/logout'], function(Logout){

				new Logout({
					layoutTemplate: appLayoutTemplate
				}).render();

			
			});
			
		},

		help: function(){

			require(['ui/help/help'], function(Help){

				new Help({
					layoutTemplate: appLayoutTemplate
				}).render();

			
			});
			
		},

	});

});
