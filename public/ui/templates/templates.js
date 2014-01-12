define(function (require, exports, module) {

	var BaseView = require('framework/baseView');
	var Holder = require('holderjs');
	var TemplatesCollection = require('collections/Templates');
	var TemplatesMenuView = require('./TemplatesMenu');
	var TemplatesListView = require('./TemplatesList');

	require('css!./templates');
	var template = require('html!./templates');



	return BaseView.extend({

		initialize: function(){

			this.highlightActiveMenuItem();

			var collection = this.collection = new TemplatesCollection();

			this.listenTo(collection, 'sync', this.render);

			collection.fetch();


		},

		render: function(){
			
			this.$el.append(template({}));
			
			// activate the tool tips for this view
			$(".preview-video-tooltip").tooltip();
			$(".create-video-tooltip").tooltip();

			// create sub views for each module
			var templatesMenuView = new TemplatesMenuView().render();
			var templatesListView = new TemplatesListView(this.collection);
			
		}
		
	});

});
