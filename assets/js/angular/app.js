angular.module('Portifolio', [])

.controller("appController", ["$rootScope", function($rootScope){
	var appCtrl = this;

	// Basic Info

	$rootScope.name = 'Rafael Brandão';

	$rootScope.role = 'Developer';

	$rootScope.email = 'r.augusto.brandao@gmail.com';

	$rootScope.place = 'São Paulo, Brazil';

	$rootScope.site = 'http://www.rafaelbrandao.xyz';

	//Social Media
	$rootScope.twitter = '';
	$rootScope.gplus = '';
	$rootScope.linkedin = 'https://www.linkedin.com/in/rafael-brand%C3%A3o-85780a37/';
	$rootScope.github = 'https://www.github.com/brandaorafael';
	$rootScope.hackernews = '';

	$rootScope.aboutme = [
		"I'm a developer with experience in several areas, including mobile apps and backend applications. I've just graduated in Computer Engineering at Polytechnic School at the University of São Paulo. I really like coding and one of my hobbies is to make all sort of projects that I keep available on my Github profile.",
		"Besides coding, I really enjoy walking and eating at good restaurants. I'm also passionate about Magic: The Gathering and I'm really into cinema and music."
	];


}]);