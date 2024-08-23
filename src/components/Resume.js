import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        />
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export let resumeData = {
  name: "Maddox Johnson",
  role: "MERN Stack Developer",
  emailId: "MaddoxJohnson7@gmail.com",
  socialLinks: [
    {
      name: "github",
      url: "http://github.com/themaddoxj",
      className: "fa fa-github",
    },
  ],
  aboutme:
    "Hey there! I'm Maddox Johnson, a passionate full stack web developer based in Lexington, KY. I've always been captivated by the intersection of technology and creativity, and my journey as a developer allows me to bring those elements together. With a keen eye for design and a knack for crafting seamless user experiences, I thrive on turning complex concepts into visually stunning and user-friendly websites. I'm proud of the exceptional results I've achieved so far. I have graduated with a certificate from the University of Central Florida Coding Bootcamp and I'm constantly driven to further refine my skills and stay ahead of industry trends. With a passion for front-end development and a commitment to continuous growth, I'm excited to make my mark in the ever-evolving world of web development.",
  address: "Location: Lexington, Kentucky",
  email: "MaddoxJohnson7@gmail.com",
  github: "TheMaddoxJ",
  linkedin: "www.linkedin.com/in/maddox-johnson",

  work: [
    {
      CompanyName: "Allied Universal",
      specialization: "Security Officer",
      YearOfLeaving: "Present",
      Achievements:
        "Making sure perimeter is secure 24/7 and responding to security risks and alarms",
    },
    {
      CompanyName: "AMR",
      specialization: "Emergency Medical Technician",
      YearOfLeaving: "2023",
      Achievements:
        "Performing life saving interventions in high stress environments as a first responder.",
    },
    {
      CompanyName: "Lake Hills Church - Intern",
      specialization: "Media Production Manager",
      MonthOfLeaving: "End of 2023",
      Achievements:
        "Production of live stream every Sunday, in charge of all video production, editing and photography, and assist in creating graphics for social media.",
    },
  ],
  skillsDescription: "These are the skills that I have experience in:",
  skills: [
    {
      skillname: "HTML",
    },
    {
      skillname: "CSS",
    },
    {
      skillname: "JavaScript",
    },
    {
      skillname: "MongoDB",
    },
    {
      skillname: "Express JS",
    },
    {
      skillname: "React.Js",
    },
    {
      skillname: "Node JS",
    },
  ],
  portfolio: [
    {
      name: "React Calculator",
      imgurl: "images/portfolio/React Calculator SS.png",
    },
    {
      name: "Book Search Engine",
      imgurl: "images/portfolio/Book Search Engine SS.png",
    },
    {
      name: "Script Scout",
      imgurl: "images/portfolio/Script Scout SS.png",
    },
    {
      name: "Guess My Number!",
      imgurl: "images/portfolio/Guess My Number.png",
    },
    {
      name: "Password Generator",
      imgurl: "images/portfolio/Password Generator Screenshot.png",
    },
    {
      name: "Work Day Scheduler",
      imgurl: "images/portfolio/Work Day Scheduler Screenshot.png",
    },
    {
      name: "Note Taker",
      imgurl: "images/portfolio/Note Taker SS.png",
    },
    {
      name: "River of Life Church",
      imgurl: "images/portfolio/RLC SS.png",
    },
  ],
};
