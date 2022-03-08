/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import awsCloudPractionerLogo from "./assets/images/awsCloudPractionerLogo.png";
import braveIncLogo from "./assets/images/braveVirtual.jpeg";
import cnLogo from "./assets/images/cnLogo.png";
import drexelLogo from "./assets/images/drexelLogo.png";
import greentoolLogo from "./assets/images/greentoolLogo.jpg";
import pennMedicineLogo from "./assets/images/pennMedicineLogo.png";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "sungyeonu",
  title: "Hi, I'm Sungyeon",
  subTitle: emoji(
    "I'm a passionate Software Developer 🚀 based in Virginia specializing in building Full-Stack web applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1go1dvTAh1ZrWZzic_fdiOnM6Wdx26bPQ/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sungyeonu",
  linkedin: "https://www.linkedin.com/in/sungyeon-yoo-995246204/",
  gmail: "sungyeonu@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Interested in working on ambitious projects with positive people",
  skills: [
    emoji("⚡ Develop and architect robust Full-stack applications"),
    emoji("⚡ Prioritize fast load times and lag-free interactions"),
    emoji("⚡ Design modern and intuitive UI for all viewports")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },

    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Drexel University",
      logo: drexelLogo,
      subHeader: "BS in Computer Science | GPA: 3.61",
      duration: "Sep. 2017 - Jun. 2021",
      desc: "Concentrations: ",
      descBullets: [
        "Artificial Intelligence",
        "Human-Computer Interaction"
        // "Minor in German",
        // "Performing Arts Scholarship"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Brave Virtual Worlds",
      companylogo: braveIncLogo,
      date: "Dec 2021 - Present",
      descBullets: [
        "Develop landing and portal page",
        "Manage cloud infrastructure on AWS Amplify and S3"
      ]
    },
    {
      role: "Junior Web Developer Intern",
      company: "Penn Medicine",
      companylogo: pennMedicineLogo,
      date: "Apr 2019 – Sep 2019",
      descBullets: [
        "Renovated intranet sites to match latest Penn Medicine standards",
        "Used Dreamweaver to regularly update company intranet pages"
      ]
    },
    {
      role: "Junior Full-stack Developer",
      company: "Greentool",
      companylogo: greentoolLogo,
      date: "Sep 2020 – May 2021",
      descBullets: [
        "Created page designs and wireframes meeting usability requirements",
        "Implemented security protections using Flask user auth and reCAPTCHA"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: cnLogo,
      projectName: "Family News Feed",
      projectDesc: [
        "Developed full-stack service in 5-man team that pushes text notifications various medical alerts, including messages from providers and reminders. ",
        "Features include scheduling, tracking and queuing messages, and data visualization. ",
        "Runner-up for Drexel College of Computing & Informatics Senior Design competition."
      ],

      footerLink: [
        {
          name: "View",
          url: "http://www.cci.drexel.edu/SeniorDesign/2020_2021/familynewsfeed/index.html"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner certification ",
      subtitle: "Earned on Aug 7, 2021",
      image: awsCloudPractionerLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1JyymvjQkM8Mz-Efj9nqI8sOg5LRnD-Ht/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to hire me or discuss a project? My Inbox is open for all.",
  number: "703-474-3869",
  email_address: "sungyeonu@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo
};
