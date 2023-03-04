// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Naqeeb",
  middleName: "",
  lastName: "Ahmed",
  message: " Data Science And Machine Learning Enthusiast.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/naqeeb2710",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/naqeeb2710",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/naqeeb2710",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/naqeeb2710",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true, 
  heading: "About Me",
  imageLink: require("../editable-stuff/naqeeb.jpg"),
  imageSize: 375,
  message:
    "Hi, I'm Naqeeb Ahmed, a Junior year Electronics & Communication Engineering student at Guru Gobind Singh Indraprastha University in New Delhi. I am deeply interested in Technology and Innovation, particularly in Data Science, Machine Learning, and Research projects. My goal is to work as a Data Scientist and I have prior experience as a Data Science Intern at Algo Analytica. In my free time, I continue to explore new techs such as cloud computing, Quantum computing, and IoT.",
  resume: "https://drive.google.com/file/d/1679RmHE-gpI5JD6r8tEJU3Ji6xEQHQbp/view?usp=share_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "naqeeb2710", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["X-Ray-Pneumonia-Prediction-CNN","Pong-Game-ML","NaqeebBlog","ADGITM-NOTICE-Discord-bot","Twitter-Sentiment-Analysis","Delhi-housing-price","Hack-sih"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/naqeeb.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/naqeeb.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"450",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "Object Oriented Programming", value: 80 },
    { name: "C/C++", value: 85 },
    { name: "Web Developmet", value: 70 },
    { name: "Data Visulaization", value: 90 },
    { name: "TensorFlow", value: 80 },
    { name: "Deep Leaaring", value: 80 },
    { name: "Natural Language Processing", value: 80 },
    { name: "Open CV", value: 80 },
    { name: "Computer Vision", value: 75 },
    { name: "Transfer Learning", value: 80 },
    { name: "Sentiment Analysis", value: 90 },
    { name: "Clustering and Classification Analysis", value: 90 },
    { name: "Mathematics and Statistics.", value: 80 },
    { name: "SQL", value: 70 },
    { name: "Power Bi", value: 80 },
    { name: "Excel", value: 80 },
    { name: "Linux", value: 80 },
    { name: "Flask", value: 70 },
    { name: "AWS", value: 40 },
    { name: "Docker", value: 80 },
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
    { name: "Impactful", value: 90 },
    { name: "Leadership", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Internship as a Data Scientist, Machine Learning Engineer or as Software Engineer. If you know of any positions available, or if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "naqeeb2710@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Data Analyst Intern',
      degree:'Electronic and Communication Engineering',
      companylogo: require('../assets/img/congress.png'),
      date: 'April 2022- July 2022',
    },
    // {
    //   role: 'Subject Matter Expert',
    //   companylogo: require('../assets/img/Chegg.png'),
    //   date: 'May 2017 – May 2018',
    // },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
