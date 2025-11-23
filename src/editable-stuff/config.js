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
    "I am a recent Electronics and Communication Engineering graduate from Guru Gobind Singh Indraprastha University, deeply passionate about Data Science, Machine Learning, and innovative research. Currently, I work as a Data Scientist at Euler Motors, developing predictive models and anomaly detection systems for EV battery health. My background includes research internships at A*STAR Singapore and MCQST Munich, where I worked on material science and quantum computing optimization respectively. I possess strong technical skills in Python, Deep Learning, Computer Vision, and Web Development, with a goal to drive technology through data-driven solutions.",
  resume: "https://drive.google.com/file/d/1PSwpl5mRfvasdFm7dK9iSJl_bJt7ScS3/view?usp=sharing",
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
  specificRepos: ["X-Ray-Pneumonia-Prediction-CNN", "Pong-Game-ML", "NaqeebBlog", "ADGITM-NOTICE-Discord-bot", "Twitter-Sentiment-Analysis", "Delhi-housing-price", "Hack-sih"],
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
    width: "450",
    height: "450"
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
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'MTS – I ( Data Science )',
      company: 'Euler Motors',
      companylogo: require('../assets/img/euler.png'),
      date: 'Aug 2024 - Present',
      desc: [
        "Engineered an end-to-end preemptive vehicle care platform to monitor and forecast battery health in real-time. Utilized a suite of machine learning models, including LSTMs for state-of-health prediction and Isolation Forests and Autoencoders for anomaly detection (e.g., cell imbalances, overheating), to automatically generate proactive service tickets, enabling a shift from reactive to predictive maintenance.",
        "Designed and deployed a payload estimation model using gradient boosting on vehicle dynamics data (e.g., motor torque, acceleration) to accurately detect vehicle overloading events, helping enforce warranty compliance and prevent premature component wear.",
        "Pioneered a RAG system leveraging Llama 2 to synthesize vast, unstructured service logs and data from the preemptive maintenance platform. This created a conversational interface for R&D and service teams to accelerate root cause analysis and identify failure patterns.",
        "Architected a scalable data pipeline for EV fleet analytics, processing large-scale operational data to generate key insights on fleet utilization and driving and charging patterns, directly informing new product development."
      ],
      skills: ["Machine Learning", "LSTM", "Isolation Forests", "Autoencoders", "RAG", "Llama 2", "Data Pipelines"]
    },
    {
      role: 'Research Intern (Statistical)',
      company: 'Agency For Science Technology And Research (A*STAR)',
      companylogo: require('../assets/img/astar.png'),
      date: 'Nov 2023 - April 2024',
      desc: [
        "Developed an automated Python-based GUI application for ASE experiments on organic materials, streamlining experimental processes.",
        "Integrated machine learning algorithms to analyze wavelength vs. intensity data at various laser power levels, identifying materials with optimal ASE properties.",
        "Applied supervised and unsupervised learning techniques to predict ASE performance and uncover patterns in photoluminescent properties.",
        "Automated data collection, preprocessing, and feature extraction, enhancing the reliability and efficiency of experimental data analysis."
      ],
      skills: ["Python", "GUI Development", "Machine Learning", "Data Analysis", "Feature Extraction"]
    },
    {
      role: 'Summer Research Student',
      company: 'Munich Center For Quantum Science and Technology (MCQST)',
      companylogo: require('../assets/img/mcqst.png'),
      date: 'July - Aug 2023',
      desc: [
        "Joined Christian Mendl's Quantum Computing Group at the Technical University of Munich.",
        "Worked on research concerning Riemannian quantum circuit optimization for Hamiltonian simulation.",
        "Employed Jax to significantly reduce computational load, resulting in a 9.3-fold increase in algorithm efficiency.",
        "Applied advanced mathematical concepts such as gradient descent, automatic differentiation, Jacobian, and Hessian matrices to optimize quantum algorithms, enhancing their performance and accuracy."
      ],
      skills: ["Quantum Computing", "Jax", "Optimization", "Mathematics", "Python"]
    },
    {
      role: 'Data Science Intern',
      company: 'Algo Analytica',
      companylogo: require('../assets/img/congress.png'),
      date: 'April - July 2022',
      desc: [
        "Built an OCR pipeline to digitize electoral rolls in MongoDB with 98% accuracy, enabling scalable analysis.",
        "Analyzed over 2M+ voter records from Uttarakhand and Rajasthan to identify key demographic trends (i.e age, gender and rich/poor).",
        "Built a predictive model using Linear Regression to forecast voter turnout at the polling-booth level, using historical turnout and demographic data to provide granular insights for campaign strategy.",
        "Led a team of 20+ members in designing and conducting large-scale surveys, analyzing the collected responses with advanced visualization techniques to derive actionable political insights."
      ],
      skills: ["OCR", "MongoDB", "Data Analysis", "Linear Regression", "Visualization"]
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
