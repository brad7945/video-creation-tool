define(function (require, exports, module) {

	var BaseView = require('framework/baseView');
	var Holder = require('holderjs');
	var TemplatesCollection = require('collections/Templates');
	var TemplatesMenuView = require('./TemplatesMenu');
	var TemplatesListView = require('./TemplatesList');

	require('css!./templates');
	var template = require('html!./templates');



	return BaseView.extend({
		
		contentType: null,
		
		duration: null,

		initialize: function(_contentType, _duration){

			this.contentType = _contentType;
			this.duration = _duration;

			this.highlightActiveMenuItem();

			var collection = this.collection = new TemplatesCollection(this.contentType, this.duration);

			collection.contentType = this.contentType;
			collection.duration = this.duration;
			this.listenTo(collection, 'sync', this.render);

			collection.fetch();

			this.$el.append(template({}));

			var templatesMenuView = new TemplatesMenuView().render(this.contentType, this.duration);

		},

		render: function(){
			
			var templatesListView = new TemplatesListView(this.collection);
			
		}
		
	});

});
