define(function (require) {

	var Home = require('./home');

	describe('home.js', function() {

		var home = new Home();

		describe('home exists', function() {
			it('home.js returns an object and instance of Backbone.View', function() {
				expect(home).to.be.a('object');
				expect(home).to.be.a(Backbone.View);
			});
		});

	});

});