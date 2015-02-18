// jobs.js
Jobs = new Mongo.Collection('jobs');
Jobs.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 300
	},
	type: {
		type: String,
		label: 'Type of project',
	},
	summary: {
		type: String,
		label: "Brief summary",
		optional: true,
		max: 1000
	},
	description: {
		type: String,
		label: "Description of project",
		optional: false
	},
	contact: {
		type: String,
		label: "Phone contact",
		max: 14
	},
	expiryDate: {
		type: Date,
		label: "Last date this book was checked out",
		optional: false
	}
}));


	/*createdAt: {
		type: Date,
		label: 'Date created'
	},*/
Jobs.before.insert(function (userId, doc) {
	// if (Meteor.user==null) { // Validating that a user is inserted
	// 	alert("Please sign in to continue");
	// 	return false;
	// };
	console.log('hell');
	doc.createdAt = Date.now();
	return true;
});

/*jobs = [
	{title: "Job 1", type: 'html', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 2", type: 'ruby', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 3", type: 'html', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 4", type: 'meteor', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 5", type: 'javascript', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 6", type: 'angular', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 7", type: 'html', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 8", type: 'html', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 9", type: 'meteor', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 10", type: 'html', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 11", type: 'html', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 12", type: 'android', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 13", type: 'ios', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 14", type: 'html', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 15", type: 'ruby', description: "This is the  job", contact: "(+233)234433128"},
	{title: "Job 16", type: 'html', description: "This is the  job", contact: "(+233)234433128"},
];

if(Jobs.find().count()<=0){
	jobs.forEach(function(job){
		Jobs.insert(job);
	});
}*/