// JobSearchForm.js

Template.JobSearchForm.events({
	'submit #search': function (e) {
		// Searching for item
		e.preventDefault();
		var searchText = $('input#searchText').val();
		var jobs = Jobs.find({type: searchText});
		console.log(jobs.count());
		$('input#searchText').val("");

	}
});