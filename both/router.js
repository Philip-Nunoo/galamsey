// router.js
Router.configure({ 
	layoutTemplate: 'layout', 
	loadingTemplate: 'loading' 
});

Router.map(function () {
	// Home route
	this.route('home', {
		path: '/',
	}),
	this.route('about',{
		path: '/about',
	}),
	this.route('search', {
		path: '/job/search',
		data: function() {
			var query = this.params.query;

			if (query.type){
				var jobs = {jobs: Jobs.find({type: query.type})};
				return jobs;
			}
			var item = {type: query.type};
			return item;
		}
	}),
	// News
	this.route('news', {
		path: '/news'
	}),
	// Archives
	this.route('archive', {
		path: '/job/archives'
	}),
	// Create Job
	this.route('NewJob', {
		path: '/job/new',
		name: 'newjob'
	}),
	// Not Found
	this.route('notFound', {
		path: '*'
	});
});