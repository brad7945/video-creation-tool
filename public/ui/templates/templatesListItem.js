define(function (require, exports, module) {

	var Backbone = require('backbone');
	
	require('css!./templatesListItem');
	var template = require('html!./templatesListItem');

	return Backbone.View.extend({

		render: function(){

			var options = [];

			if (this.model.images != "0") {
				options.push(this.model.images + " images");
			}

			if (this.model.videos != "0") {
				options.push(this.model.videos + " videos");
			}

			var customizedText = "";

			for (var i=0; i < options.length; i++) {

				if (i < options.length - 1) {
					customizedText += options[i] + " and ";	
				} else {
					customizedText += options[i];
				}
				
			}

			this.model.customizedText = customizedText;
			this.model.previewToolTipTitle = "Click to watch video.";
			this.model.createToolTipTitle = "Click to create a video.";
			this.model.thumbnailURL = "resources/images/templates/" + this.model.name + ".png";
			this.$el.html(template(this.model));
			// activate the tool tips for the list
			$(".preview-video-tooltip").tooltip({'placement': 'bottom'});
			$(".create-video-tooltip").tooltip();
			return this;
			
		}
		
	});

});
