define(function (require, exports, module) {

	var Backbone = require('backbone');
	
	require('css!./templatesListItem');
	var template = require('html!./templatesListItem');

	return Backbone.View.extend({

		render: function(){

			console.log(this.model); // node item
			this.$el.html(template({}));
			return this;
			
		}
		
	});

});
