angular.module('Portifolio', [])

.controller("appController", ["$rootScope", function($rootScope){
	var appCtrl = this;

	// Basic Info
	$rootScope.name = 'Rafael Brandão';

	$rootScope.role = 'Developer';

	$rootScope.email = 'r.augusto.brandao@gmail.com';

	$rootScope.location = 'São Paulo, Brazil';

	$rootScope.site = 'http://www.rafaelbrandao.xyz';

	//Social Media
	$rootScope.twitter = '';
	$rootScope.gplus = '';
	$rootScope.linkedin = 'https://www.linkedin.com/in/rafael-brand%C3%A3o-85780a37/';
	$rootScope.github = 'https://www.github.com/brandaorafael';
	$rootScope.hackernews = '';

	$rootScope.coderWall = '';

	// About Me
	$rootScope.aboutme = [
		"I'm a developer with experience in several areas, including mobile apps and backend applications. I've just graduated in Computer Engineering at Polytechnic School at the University of São Paulo. I really like coding and one of my hobbies is to make all sort of projects that I keep available on my Github profile.",
		"Besides coding, I really enjoy walking and eating at good restaurants. I'm also passionate about Magic: The Gathering and I'm really into cinema and music."
	];

	//Latest Projects
	$rootScope.mainProject = {
		title: 'KickStarter - Velocity',
		subTitle: 'A responsive Bootstrap template designed for digital products',
		link: 'http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-products-velocity/',
		image: 'assets/images/projects/project-featured.png',
		isNew: true,
		description: [
			'You can promote your main project here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.',
			'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. At vero eos et accusamus et iusto odio dignissimos ducimus.'
		]
	};

	$rootScope.projects = [
		{
			link: 'http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/',
			image: 'assets/images/projects/project-5.png',
			title: 'Atom - Designed for Mobile Apps',
			description: 'You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.'
		},
		{
			link: 'http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/',
			image: 'assets/images/projects/project-4.png',
			title: 'DevStudio - Designed for Web Development Agencies',
			description: 'You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.'
		},
		{
			link: 'http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/',
			image: 'assets/images/projects/project-1.png',
			title: 'Tempo - Designed for Startups',
			description: 'You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.'
		},
		{
			link: 'http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/',
			image: 'assets/images/projects/project-2.png',
			title: 'Delta - Designed for Mobile Apps',
			description: 'You can put one of your secondary projects here. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.'
		},
	];

	// Other Projects
	$rootScope.otherProjects = [
		{
			title: 'Project Title Cras Lacus',
			openSource: false,
			description: 'Provide a brief description of your project. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatu.',
			link: 'http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/',
			linkButton: ' Find out more'
		},
		{
			title: 'Project Title Cras eget lacus',
			openSource: true,
			description: 'Provide a brief description of your project. Maecenas ornare ultricies risus, in fermentum augue consectetur in. Vestibulum vitae mauris iaculis, sollicitudin velit in, molestie nulla. ',
			link: 'http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/',
			linkButton: ' View on GitHub'
		},
		{
			title: 'Project Title Maecenas Ornare',
			openSource: true,
			description: 'Provide a brief description of your project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel purus enim. Etiam tortor felis, fermentum ac ultrices sed.',
			link: 'http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/',
			linkButton: ' View on GitHub'
		},
	];

	// Work Experience
	$rootScope.experiences = [
		{
			role: 'Software Engineer',
			company: 'CERC',
			start: 'Jan 2018',
			end: 'Present',
			description: 'CERC is an infrastructure for the financial market and it develops a tool for rating and registration of trade bills. I am responsible for the system support, deploy and development of the BI part of the system.'
		},
		{
			role: 'Software Engineer',
			company: 'Appsimples / Outsmart',
			start: 'Oct 2016',
			end: 'Set 2017',
			description: 'Outsmart (fromer Appsimples) is an app factory. I had experience with Mobile apps implementations, for both Android and iOS platforms, web apps implementations using Angular and React and APIs implementations using Node.JS.'
		},
		{
			role: 'Web Developer',
			company: 'Ploomes',
			start: 'Jan 2016',
			end: 'May 2016',
			description: 'Outsmart (former Appsimples) is an app factory. I had experience with Mobile apps implementations, for both Android and iOS platforms, web apps implementations using Angular and React and APIs implementations using Node.JS.'
		},
		{
			role: 'Developer Intern',
			company: 'Taqtile',
			start: 'May 2015',
			end: 'Sep 2015',
			description: 'Taqtile is an app factory, specialized in UX and Design Thinking. I had experience with mobile apps (Android) and APIs (Node.js) implementations.'
		},
		{
			role: 'Intern',
			company: 'LARC - Laboratory of Computer Networks and Architecture',
			start: 'Jul 2013',
			end: 'Dec 2014',
			description: 'LARC is a laboratory part of the University of São Paulo responsible for the study of computer networks. I worked on the project Science DMZ - The Science DMZ program aims the study and dissemination of better networks infrastructures practices for scientific applications. I was responsible for the development of automated speed test of the connections between servers.'
		}
	];

	//Github

	//Skills
	$rootScope.skills = [
		{
			title: 'Javascript & Node.JS',
			levelLabel: 'Expert',
			levelTooltip: 'Experience with planty of projects',
			levelPercentage: '96%'
		},
		{
			title: 'iOS',
			levelLabel: 'Expert',
			levelTooltip: 'Have lots of published apps',
			levelPercentage: '96%'
		},
		{
			title: 'Angular',
			levelLabel: 'Pro',
			levelTooltip: '',
			levelPercentage: '85%'
		},
		{
			title: 'Ruby on Rails',
			levelLabel: 'Intermediate',
			levelTooltip: '',
			levelPercentage: '70%'
		},
	];

	// Testimonials
	$rootScope.testimonials = [
		{
			quote: 'James is an excellent software engineer and he is passionate about what he does. You can totally count on him to deliver your projects!',
			name: 'Tim Adams',
			title: 'Curabitur commodo'
		}
	];

	//Education
	$rootScope.education = [
		{
			title: 'Computer Engineering',
			institution: 'Polytechnic School - University of São Paulo',
			start: '2011',
			end: '2017'
		},
		{
			title: 'Multimedia Production',
			institution: 'Liceu de Artes e Ofícios de São Paulo',
			start: '2007',
			end: '2009'
		}
	];

	//Languages
	$rootScope.languages = [
		{
			language: 'Portuguese',
			level: 'Native Speaker',
			stars: 5
		},
		{
			language: 'English',
			level: 'Professional Proficiency',
			stars: 4.5
		},
		{
			language: 'French',
			level: 'Beginner',
			stars: 2.5
		}
	];

	//Blog Posts

	//music
	$rootScope.musics = [
		{
			title: 'Etiam hendrerit urna nunc',
			artist: '',
			link: ''
		},
		{
			title: 'Ut sollicitudin in mauris non auctor',
			artist: '',
			link: ''
		},
		{
			title: 'Etiam hendrerit urna nunc',
			artist: '',
			link: ''
		},
		{
			title: 'Duis et felis bibendum',
			artist: '',
			link: ''
		}
	];

	//Conferences
	$rootScope.conferences = [
		{
			title: 'WWDC 2014',
			place: 'San Francisco',
			link: 'https://developer.apple.com/wwdc/'
		},
		{
			title: 'Hive',
			place: 'Seattle',
			link: 'http://hive.aigaseattle.org/'
		}
	];

	//Credit


}]);