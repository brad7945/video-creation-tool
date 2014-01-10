define(function (require, exports, module) {

	var BaseView = require('framework/baseView');
	var Holder = require('holderjs');
	var TemplatesCollection = require('collections/Templates');
	
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

			
			this.collection.groupBy( function(model){
				console.log("returning grouped results")
				return model.get('title');
			});

			console.log('...', this.collection.toJSON())
			
			this.$el.append(template({}));
			Holder.run();
			// activate the tool tips for this view
			$(".preview-video-tooltip").tooltip();
			$(".create-video-tooltip").tooltip();

		}
		
	});

});
