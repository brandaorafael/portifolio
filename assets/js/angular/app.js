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
			role: 'Co-Founder & Lead Developer',
			company: 'Startup Hub',
			start: '2014',
			end: 'Present',
			description: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.'
		},
		{
			role: 'Software Engineer',
			company: 'Google',
			start: '2013',
			end: '2014',
			description: 'Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.'
		},
		{
			role: 'Software Engineerr',
			company: 'eBay',
			start: '2012',
			end: '2013',
			description: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.'
		}
	];

	//Github

	//Skills
	$rootScope.skills = [
		{
			title: 'Python & Django',
			levelLabel: 'Expert',
			levelTooltip: 'You can use the tooltip to add more info...',
			levelPercentage: '96%'
		},
		{
			title: 'Javascript & jQuery',
			levelLabel: 'Expert',
			levelTooltip: '',
			levelPercentage: '96%'
		},
		{
			title: 'HTML5, CSS3, SASS & LESS',
			levelLabel: 'Expert',
			levelTooltip: '',
			levelPercentage: '96%'
		},
		{
			title: 'Ruby on Rails',
			levelLabel: 'Pro',
			levelTooltip: '',
			levelPercentage: '85%'
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
			title: 'MSc Psychology and Computer Science',
			institution: 'University College London',
			start: '2011',
			end: '2012'
		},
		{
			title: 'BSc Computer Science',
			institution: 'University of Bristol',
			start: '2008',
			end: '2011'
		}
	];

	//Languages
	$rootScope.languages = [
		{
			language: 'English',
			level: 'Native Speaker',
			stars: 5
		},
		{
			language: 'Spanish',
			level: 'Professional Proficiency',
			stars: 3.5
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