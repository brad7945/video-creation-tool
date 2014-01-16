define(function (require, exports, module) {
	
	var Backbone = require('backbone');
	var BaseView = require('framework/baseView');
	var mediator = require('framework/mediator');
	var template = require('html!../templatesListItem/templatesListItem');
	var TemplatesListItemView = require('../templatesListItem/templatesListItem');
	var GetAllTemplatesCollection = require('collections/GetAllTemplates');
	

	return BaseView.extend({

		el: "#templates-list-container",
		results: null,

		initialize:function(options) {

			// default query is to get all templates
			var collection = this.collection = new GetAllTemplatesCollection();
			this.listenTo(collection, 'sync', this.render);

			collection.fetch();
	
		},

		render: function(_coll){

			this.results = _coll.toJSON();
			$("#templates-list-container").html("");

		    for (var k = 0; k < this.results.length; k++) {

		        var _model = this.results[k];
		     	var view = new TemplatesListItemView({model: _model});
		        var el = view.render().el;

		        $("#templates-list-container").append(el);

		    }

		    var scope = this;
			mediator.on('searchTemplates', function(_val){
				scope.update(_val)
			});

			mediator.on('getAllTemplates', function(){
				scope.getAllTemplates();
			});

			return this;
		},

		getAllTemplates: function() {

			var collection = this.collection = new GetAllTemplatesCollection();
			this.listenTo(collection, 'sync', this.render);

			collection.fetch();

		}
		
	});

});
