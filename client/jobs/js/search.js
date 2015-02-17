// search.js
Template.Search.helpers({
	foo: function () {
		// ass
		console.log("search: " + this.params.type);
	}
});