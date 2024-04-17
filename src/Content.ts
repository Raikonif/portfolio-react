// import images

import Hero_person from "./assets/images/Hero/person.png";
import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import kotlin from "./assets/images/Skills/kotlin.png";
import android from "./assets/images/Skills/android.png";
import fastapi from "./assets/images/Skills/fastapi.png";
import javascript from "./assets/images/Skills/javascript.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall, MdOutlinePermContactCalendar } from "react-icons/md";
import { BsInstagram, BsFillSunFill } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine, RiMacbookFill } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";

export const content = {
  buttons: [
    {
      icon: FaMoon,
      text: "dark"
    },
    {
      icon: BsFillSunFill,
      text: "light"
    },
    {
      icon: RiMacbookFill,
      text: "system"
    }
  ],
  nav: [
    {
      link: "#home",
      icon: TbSmartHome
    },
    {
      link: "#skills",
      icon: BiUser
    },
    {
      link: "#services",
      icon: RiServiceLine
    },
    {
      link: "#projects",
      icon: RiProjectorLine
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar
    }
  ],
  hero: {
    title: "SOFTWARE DEVELOPER",
    firstName: "DIEGO",
    LastName: "ALARCÓN",
    LastName2: "INTURIAS",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development"
      },
      {
        count: "1+",
        text: "Years of Experience in Mobile development"
      },
      {
        count: "2+",
        text: "Projects Worked in my career"
      }
    ]
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Kotlin",
        para: "I used this lengauge to develop my first mobile app",
        logo: kotlin,
        description: [
          "Kotlin is a statically typed programming language that runs on the Java virtual machine and also can be compiled to JavaScript source code or use the LLVM compiler infrastructure.",
          "Kotlin is a general-purpose, free and open-source programming language that is specifically designed for the development of Android applications.",
          "Kotlin is a statically typed programming language that runs on the Java virtual machine and also can be compiled to JavaScript source code or use the LLVM compiler infrastructure.",
          "Kotlin is a general-purpose, free and open-source programming language that is specifically designed for the development of Android applications."
        ]
      },
      {
        name: "Javascript",
        para: "I have experience in this language to develop web apps",
        logo: javascript,
        description: [
          "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
          "JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
          "Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins by means of a built-in JavaScript engine."
        ]
      },
      {
        name: "Android",
        para: "I Worked with Android Studio and Kotlin to develop my multiple apps",
        logo: android,
        description: [
          "Android Studio is the official integrated development environment (IDE) for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development.",
          "It is available for download on Windows, macOS and Linux based operating systems.",
          "Android Studio provides the fastest tools for building apps on every type of Android device."
        ]
      },
      {
        name: "React js",
        para: "I Worked with this Library in Team Projects and for my personal projects",
        logo: reactjs,
        description: [
          "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
          "React can be used as a base in the development of single-page or mobile applications.",
          "However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing."
        ]
      },
      {
        name: "Fast API",
        para: "I have experience in this framework in team projects",
        logo: fastapi,
        description: [
          "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.",
          "The key features are: Fast: Very high performance, on par with NodeJS and Go (thanks to Starlette and Pydantic)."
        ]
      },
      {
        name: "Python",
        para: "I know this language to develop my personal projects and team projects",
        logo: python,
        description: [
          "Python is an interpreted, high-level and general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
          "Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."
        ]
      }
    ],
    icon: MdArrowForward
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3
      }
    ]
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1
      },
      {
        title: "Social Media web",
        image: project2
      },
      {
        title: "Creative Website",
        image: project3
      }
    ]
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Was a good project done and i loved the results”",
        img: avatar1,
        name: "JOHN DOE"
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex"
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny"
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN"
      }
    ]
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Im a professional web developer. Ihave 1+ years of experience in web development. I have worked on projects for clients.",
    btnText: "Hire Me"
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "raikonif@gmail.com",
        icon: GrMail,
        link: "mailto:raikonif@gmail.com"
      },
      {
        text: "+591 63142527",
        icon: MdCall,
        link: "https://wa.me/+59163142527"
      },
      {
        text: "Raikonif",
        icon: BsInstagram,
        link: "https://www.instagram.com/raikonif/"
      }
    ]
  },
  Footer: {
    text: "All © Copy Right Reserved 2023"
  }
};
