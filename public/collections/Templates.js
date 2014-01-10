define(function (require, exports, module) {

	var TemplatesModel = require('models/Templates');

	return Backbone.Collection.extend({

			model: TemplatesModel,

			url: 'php/unit-tests/templates.php',

			parse: function(response) {
	
				return response;
	
			}

	});

});