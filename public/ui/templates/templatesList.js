define(function (require, exports, module) {
	
	var Backbone = require('backbone');
	var BaseView = require('framework/baseView');
	var mediator = require('framework/mediator');
	require('css!./templatesListItem');
	var template = require('html!./templatesListItem');
	var TemplatesListItemView = require('./TemplatesListItem');
	

	return BaseView.extend({

		el: "#templates-list-container",
		data: null,
		initialize: function(_coll) {

			this.data = _coll.toJSON();
			this.render();

		},

		render: function(){

	
		    for (var k = 0; k < this.data.length; k++) {
		    	
		        var _model = this.data[k];
		     	var view = new TemplatesListItemView({model: _model});
		        var el = view.render().el;

		        $("#templates-list-container").append(el);

		    }

		    var scope = this;
			mediator.on('searchTemplates', function(_val){
				scope.update(_val)
			});

		},

		update: function(_val) {

			$("#templates-list-container").html("");

			for (var k = 0; k < this.data.length; k++) {

				var str = this.data[k].human_name;
				
				if (str.toLowerCase().indexOf(_val) >= 0) {
					var _model = this.data[k];
					var view = new TemplatesListItemView({model: _model});
		        	var el = view.render().el;

		        	$("#templates-list-container").append(el);

				}

			}

		}
		
	});

});
