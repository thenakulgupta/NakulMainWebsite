const calculateYears = (date1) => {
	var today = new Date();
	var birthDate = new Date(date1);
	var years_now = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		years_now--;
	}
	return years_now;
};

function calculateDateFromTo(yearFrom, yearTo) {
	let today;
	if (yearTo) {
		today = new Date("01 " + yearTo);
	} else today = new Date();
	today = new Date(today.getFullYear(), today.getMonth() + 2, 0);
	console.log(today);
	let dob = new Date("01 " + yearFrom),
		diff = today.getTime() - dob.getTime(),
		years = Math.floor(diff / 31556736000),
		days_diff = Math.floor((diff % 31556736000) / 86400000),
		months = Math.floor(days_diff / 30.4167);
	return (
		`${
			years !== 0
				? years +
				  ` year${years === 1 ? "" : "s"}` +
				  (months !== 0 ? " " : "")
				: ""
		}${months !== 0 ? months + ` month${months === 1 ? "" : "s"}` : ""}` +
		(yearTo ? "" : "+")
	);
}

const myData = {
	name: "Nakul Gupta",
	email: "nakulgupta1042@gmail.com",
	phone: "+91-8802631740",
	designation: "Software Dev. Engineer 1 | Node.js | PHP | Flutter",
	address: "Delhi, India",
	dateOfFirstOffice: "27 May 2022",
	imageThumb: "/images/logo.png",
	social: {
		linkedin: "https://www.linkedin.com/in/thenakulgupta/",
		leetcode: "https://leetcode.com/gnakul2001/",
		github: "https://github.com/gnakul2001",
	},
};

const getTotalExperience = () => {
	return calculateYears(myData.dateOfFirstOffice);
};

var tExp = getTotalExperience();

const headerData = {
	name: myData.name,
	designation: myData.designation,
	imageThumb: myData.imageThumb,
	social: myData.social,
};

const aboutData = {
	resumePath:
		"https://drive.google.com/drive/folders/18ejwWyHW_EvrR3S5Ftz93xaq6L1-fLbI?usp=share_link",
	image: "images/about.png",
	name: myData.name,
	email: myData.email,
	phone: myData.phone,
	location: myData.address,
	aboutMe: `I am a dedicated and efficient developer with experience in Flutter, Full Stack development, and Android Java, totaling over ${
		tExp === 1 ? "1 year" : `${tExp} years`
	}. I am certified in both Frontend and Backend technologies. My journey began with Android Java, PHP, and MySQL for the backend, after which I transitioned to working with Laravel, Flutter, NodeJS, and Python. I have now achieved comfort and proficiency in all of these languages, and I continue to expand my knowledge on a daily basis.`,
	languageKnown:
		"Languages and Frameworks Known:\nPHP, Android Java, Flutter, Laravel, MySQL, NodeJS, Python, and many more on my learning list.",
};

const heroSectionData = {
	name: myData.name,
	aboutMe: `I am a committed and proficient developer with more than ${
		tExp === 1 ? "1 year" : `${tExp} years`
	} of experience in Flutter, Full Stack development, and Android Java.`,
};

const skillData = {
	skillContent:
		"Certified in both Frontend and Backend technologies, I embarked on my journey with Android Java, PHP, and MySQL for the backend. I then progressed to mastering Laravel, Flutter, NodeJS, and Python. Presently, I am proficient and at ease with all these programming languages.",
	progressData: [
		{
			id: 1,
			name: "Data Structures & Algorithm (DSA)",
			percentage: 60,
		},
		{
			id: 2,
			name: "C++",
			percentage: 65,
		},
		{
			id: 3,
			name: "PHP",
			percentage: 95,
		},
		{
			id: 4,
			name: "Laravel",
			percentage: 90,
		},
		{
			id: 5,
			name: "NodeJS",
			percentage: 90,
		},
		{
			id: 6,
			name: "Flutter",
			percentage: 90,
		},
		{
			id: 7,
			name: "MySQL",
			percentage: 90,
		},
		{
			id: 8,
			name: "Android Java",
			percentage: 80,
		},
		{
			id: 9,
			name: "Python",
			percentage: 60,
		},
	],
};

const experiencesData = [
	{
		id: 1,
		yearFrom: "June 2022",
		yearTo: "June 2023",
		position: "Software Development Engineer (SDE) 1",
		entity: "Q1 Business Solutions LLC (Remote)",
		tasks: `1. One of my most significant achievements has been developing an Admin Panel, Web App, and Blogging System that contributed to a 2.5x increase in sales.\n\n
				2. Additionally, I leveraged my expertise in optimizing and improving APIs to make our application 70% faster and reduce 20% clicks for tasks. This led to an enhanced user experience and improved efficiency of the application.\n\n
				3. As a team lead, I managed a team of 2 employees and established a hierarchy under them, leading to the addition of 5 more employees. I provided mentorship and guidance to the team members, ensuring that all project goals were met and deadlines were adhered to.\n\n
				4. Furthermore, I managed Continuous Integration/Continuous Deployment (CI/CD) with 300+ commits and 100+ merge requests. I ensured that all changes to the codebase were thoroughly tested and met quality standards before deployment, leading to a seamless and error-free release process.`,
	},
	{
		id: 2,
		yearFrom: "Apr 2019",
		yearTo: "Apr 2022",
		position: "Passion Projects",
		entity: "Passion Projects",
		tasks: `1. Led end-to-end development of Telepaygate, a successful payment gateway solution, overseeing design, development, and implementation processes.\n\n
				2. Strategically planned and efficiently executed the project, resulting in the creation of a reliable and secure payment gateway capable of processing consumer payments and streamlining employee/merchant payouts.\n\n
				3. Strengthened project management skills through hands-on experience, effectively coordinating tasks, timelines, and resources to achieve project goals.\n\n
				4. Showcased adept team leadership abilities, guiding and motivating the development team towards a common objective, while fostering a collaborative and innovative work environment.`,
	},
	{
		id: 3,
		yearFrom: "June 2022",
		yearTo: "Aug 2022",
		position: "Full Stack Developer Intern",
		entity: "Oyester Training (Delhi, India)",
		tasks: `1. Developed front-end and back-end components of web applications as a Full Stack Developer intern at Oyesters Training.\n\n
				2. Collaborated within a team of developers to design and implement projects utilizing technologies including HTML, CSS, JavaScript, and PHP.\n\n
				3. Built, tested, and debugged web applications, showcasing proficiency in troubleshooting and issue resolution.\n\n
				4. Contributed to timely project delivery through effective collaboration with team members, enhancing skills in Full Stack Development and software engineering.`,
	},
	{
		id: 4,
		yearFrom: "May 2015",
		yearTo: "Apr 2022",
		position: "Full Stack Developer",
		entity: "Freelance (Delhi, India)",
		tasks: `1. 7 Years of Full-Stack Development Expertise: Demonstrated track record of 7 years in designing and developing dynamic, responsive web applications, showcasing a deep understanding of the complete development lifecycle.\n\n
				2. Proficient in Multiple Programming Languages: Skilled in JavaScript, PHP, and Python, enabling the creation of robust and innovative software solutions that align with modern development practices.\n\n
				3. Comprehensive Front-End and Back-End Proficiency: Adept at both front-end and back-end development, ensuring the delivery of efficient, secure, and user-friendly applications that provide seamless experiences for end-users.\n\n
				4. Client-Centric Collaboration: Proven ability to work closely with clients, actively participating in project discussions and leveraging collaboration to achieve client objectives, emphasizing adaptability to diverse project requirements.`,
	},
];

const educationsData = [
	{
		id: 1,
		yearFrom: "July 2020",
		yearTo: "June 2023",
		degree: "Bachelor of Computer Application (B.C.A)",
		position: [
			"Class Representative",
			"Head Student Coordinator (TechnoVision Event 2022)",
			"Fitness Club Coordinator",
			"Eco Club Coordinator",
		],
		grade: "9.3/10",
		institute: "Tecnia Institute of Advanced Studies",
		description: `	1. Active participation in various activities and societies at Tecnia Institute of Advanced Studies, resulting in enhanced leadership and organizational skills.\n\n
					 	2. Served as a Class Representative, effectively communicating and advocating for batchmates' interests to faculty members.\n\n
						3. Successfully managed a team of volunteers and organized diverse events as the Head Student Coordinator for TechnoVision Event 2022.\n\n
					  	4. Coordinated Fitness Club activities, promoting healthy habits and arranging fitness events, while also leading the Eco Club's initiatives for environmental consciousness and sustainability. These experiences refined teamwork, communication, and time management skills, all of which are crucial in any professional setting. Passionate about creating positive impacts both on-campus and in wider contexts, driving a continuous pursuit of growth opportunities.`,
	},
	{
		id: 2,
		yearFrom: "April 2021",
		yearTo: "April 2021",
		degree: "Programming for Everybody (Getting Started with Python)",
		institute: "University of Michigan",
		description: `	1. Completed online course "Programming for Everybody (Getting Started with Python)" from University of Michigan via Coursera.
						2. Attained foundational knowledge of computer programming using Python, encompassing basic syntax, data types, functions, and control structures.
						3. Demonstrated practical application through hands-on programming assignments and quizzes.
						4. Equipped with the competence to independently develop Python programs following successful course completion.`,
	},
	{
		id: 3,
		yearFrom: "April 2019",
		yearTo: "March 2020",
		degree: "Class 12th Examination (CBSE)",
		grade: "68.8%",
		institute: "Jain Bharati Mrigavati Vidyalaya",
		description: `	1. Active Participation in Atal Tinkering Lab: Engaged in hands-on learning and innovation through active involvement in the Atal Tinkering Lab, fostering creativity and problem-solving skills.\n\n
						2. Diverse Commerce Education: Successfully completed a well-rounded commerce education covering English, Accountancy, Economics, Business Studies, and Informatics Practices, enhancing both analytical and communication abilities.\n\n
						3. Proficiency in Programming Languages: Attained proficiency in programming languages such as Python and C++ as part of the Informatics Practices curriculum, demonstrating technical competence and logical thinking.\n\n
						4. Strong Foundation in Business and Tech: Cultivated a robust foundation in both business principles and technical skills, nurturing a passion for the convergence of business and technology, positioning me for tech industry roles demanding a holistic skill set.`,
	},
];

const projects = [
	{
		id: 1,
		name: "TelePayGate",
		image: "images/projects/telepaygate_merchant_dashboard.png",
		slug: "telepaygate",
		url: "https://dashboard.telepaygate.guptanakul.com",
	},
	{
		id: 2,
		name: "Covid Vaccine Finder",
		image: "images/projects/covid-vaccine-finder.png",
		slug: "covid-vaccine-finder",
		url: "https://covid-vaccine-finder.guptanakul.com",
	},
];

const contactData = {
	phone: myData.phone,
	email: myData.email,
	location: myData.address,
};

export {
	calculateYears,
	calculateDateFromTo,
	myData,
	aboutData,
	heroSectionData,
	skillData,
	experiencesData,
	educationsData,
	contactData,
	headerData,
	projects,
};
