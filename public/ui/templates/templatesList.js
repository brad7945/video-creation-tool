define(function (require, exports, module) {
	
	var Backbone = require('backbone');
	require('css!./templatesListItem');
	var template = require('html!./templatesListItem');
	var TemplatesListItemView = require('./TemplatesListItem');
	

	return Backbone.View.extend({

		el: "#templates-list-container",
		data: null,

		initialize: function(_coll) {

			this.data = _coll.toJSON();
			//console.log(this.data.toJSON())
			this.render();

		},

		render: function(){

			this.$el.html(template({}));
			// populate the primary library and top library
		    for (var k = 0; k < this.data.length; k++) {
		    	
		        var _model = this.data[k];
		        
		        var view = new TemplatesListItemView({model: _model});
		        
		        var el = view.render().el;

		        this.$el.append(el);

		    }

		    Holder.run();

		}
		
	});

});
