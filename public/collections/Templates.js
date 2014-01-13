define(function (require, exports, module) {

	var TemplatesModel = require('models/Templates');

	return Backbone.Collection.extend({

			model: TemplatesModel,

			url: 'php/unit-tests/templates.php',

			options: null,

			initialize: function(options) {

				this.options = options;
				console.log(this.options)

			},

			url: function(){

				return "php/unit-tests/templates.php?contentType="+this.options.contentType+"&duration="+this.options.duration;

			},

			parse: function(response) {
	
				return response;
	
			}

	});

});