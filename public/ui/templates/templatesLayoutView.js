define(function (require, exports, module) {

	var BaseView = require('framework/baseView');
	var Holder = require('holderjs');
	var TemplatesCollection = require('collections/Templates');
	var TemplatesMenuView = require('./templatesMenu/templatesMenu');
	var TemplatesListView = require('./templatesList/templatesListView');

	require('css!./templatesLayoutView');
	var template = require('html!./templatesLayoutView');

	return BaseView.extend({

		initialize: function(options){
			this.$el.html(template({}))

			var templatesMenuView = new TemplatesMenuView().render();

			this.render();

			var templatesListView = new TemplatesListView(options.contentType, options.duration);
				//templatesListView.render();
		},

		render: function(){
			

			
		}
		
	});

});
