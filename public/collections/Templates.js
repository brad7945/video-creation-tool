define(function (require, exports, module) {

	var TemplatesModel = require('models/Templates');

	return Backbone.Collection.extend({

			model: TemplatesModel,

			url: 'php/unit-tests/templates.php?contentType=images',

			parse: function(response) {
	
				return response;
	
			}

	});

});