define(function (require, exports, module) {

	var TemplatesModel = require('models/Templates');

	return Backbone.Collection.extend({

			model: TemplatesModel,

			url: 'php/unit-tests/getAllTemplates.php',

			options: null,

			initialize: function(options) {

				this.options = options;

			},

			parse: function(response) {
	
				return response;
	
			}

	});

});