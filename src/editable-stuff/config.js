// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Gayatri",
  middleName: "",
  lastName: "Dalvi",
  message: " Always Ready to Learn Something New",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/gdalvi94",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/gdalvi/",
    },
    
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile_pic.png"),
  imageSize: 375,
  message:
    "I am Gayatri Dalvi an Information Systems Graduate Student at Northeastern University. I have hands-on knowledge developing dynamic websites, utilizing technologies like HTML, CSS, SCSS, React.js, Node.js and MongoDb . Efficient working in a collaborative environment and determined to learn new skills. ",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "gdalvi94", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Internship/Co-op Software Engineering or Data Scientist opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "dalvi.ga@northeastern.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Programmer Analyst Intern',// Here Add Company Name
      companylogo: require('../assets/img/cognizant.png'),
      date: 'February 2022 – June 2022',
    },
    {
      role: 'Machine Learning Intern',
      companylogo: require('../assets/img/forsk.png'),
      date: 'December 2020 – January 2021',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
