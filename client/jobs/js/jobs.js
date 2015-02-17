// jobs.js

Template.Jobs.helpers({
	jobs: function () {
		// this returns all the jobs listed
		return Jobs.find();
	},
	'input submit': function(e,t){
		e.preventDefault();

	}
});