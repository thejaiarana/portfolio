import React from 'react';
import './Website.css';
import Project from './components/Project';
import Project2 from './components/Project2';

import dataService from '../providers/Data';

class Website extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeMenu: '',
            projectsHTML: []
        };
        // this.generateHTML();
    }

    generateHTML() {
        let HTML = [];
        for (const [index, project] of dataService.projects.entries()) {
            HTML.push(<div key={index} className="col-sm-12 col-md-4 col-lg-4">
                <Project name={project.name} desc={project.description} img={project.image || 'assets/projects/default.jpg'}
                    url={project.url} type={project.type} role={project.role} tech={project.technology} team={project.teamMembers} />
            </div>)
        }
        this.setState({ projectsHTML: HTML });
    }

    generateHTML2() {
        let HTML = [];
        for (const [index, project] of dataService.projects.entries()) {
            HTML.push(<div key={index} className="col-sm-12 col-md-4 col-lg-4">
                <Project2 name={project.name} desc={project.description} img={project.image || 'assets/projects/default.jpg'}
                    url={project.url} type={project.type} role={project.role} tech={project.technology} team={project.teamMembers} />
            </div>)
        }
        this.setState({ projectsHTML: HTML });
    }



    componentWillMount() {
        this.generateHTML2();
    }

    onMenuClick(activeMenu) {
        console.log('activeMenu:', activeMenu);
        this.setState({ activeMenu: activeMenu });
    }

    render() {

        return (
            <div className="row main-row" >
                <div className="col-xs-0 col-sm-0 col-md-2 left-side">
                    <div className="name-container">
                        <div className="my-name ">Jai Rana</div>
                        <div className="full-stack">Full Stack Developer</div>
                    </div>
                    <div className="sidebar">
                        <div className="side-menu active-side-menu">
                            <a href="#about" className={this.state.activeMenu === 'about' ? 'active' : ''} onClick={() => this.onMenuClick('about')}>
                                <i className="fa fa-user"></i> <span>About</span>
                            </a>
                        </div>
                        <div className="side-menu">
                            <a href="#experience" className={this.state.activeMenu === 'experience' ? 'active' : ''} onClick={() => this.onMenuClick('experience')}>
                                <i className="fa fa-signal"></i> <span>Experience</span>
                            </a>
                        </div>
                        <div className="side-menu">
                            <a href="#projects" className={this.state.activeMenu === 'projects' ? 'active' : ''} onClick={() => this.onMenuClick('projects')}>
                                <i className="fa fa-tasks"></i> <span>Projects</span>
                            </a>
                        </div>
                        <div className="side-menu">
                            <a href="#skills" className={this.state.activeMenu === 'skills' ? 'active' : ''} onClick={() => this.onMenuClick('skills')}>
                                <i className="fa fa-cogs"></i> <span>Skills</span>
                            </a>
                        </div>
                        <div className="side-menu">
                            <a href="#education" className={this.state.activeMenu === 'education' ? 'active' : ''} onClick={() => this.onMenuClick('education')}>
                                <i className="fa fa-graduation-cap"></i> <span>Education</span>
                            </a>
                        </div>
                        <div className="side-menu" >
                            <a href="#contact" className={this.state.activeMenu === 'contact' ? 'active' : ''} onClick={() => this.onMenuClick('contact')}>
                                <i className="fa fa-envelope"></i> <span>Contact</span>
                            </a>
                        </div>
                        <div className="side-menu">
                            <a href="#resume" className={this.state.activeMenu === 'resume' ? 'active' : ''} onClick={() => this.onMenuClick('resume')}>
                                <i className="fa fa-file"></i> <span>Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-10 right-side">
                    <div className="front-page">
                        <div className="font-page-layer">
                            <div className="front-content">
                                <div className="front-line-1">Hello, I'm <span>Jai Rana</span></div>
                                <div className="front-line-2">A full stack web developer.</div>
                                {/* <div className="view-my-experience">
                                <span>View My Experience</span>
                                <i className="fa fa-arrow-down"></i>
                            </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="about-page page-section" id="about">
                        <div className="heading">ABOUT</div>
                        <div className="about-container">
                            <div className="short-bio">{dataService.about.oneline}</div>
                            <div className="about-myself" >
                                <p dangerouslySetInnerHTML={{ __html: dataService.about.long }}></p>
                            </div>
                            <div className="current-focus">
                                <strong>Current Focus:</strong>
                                {dataService.about.currentFocus.map((focus, i) => <span key={i}>{focus}</span>)}
                            </div>
                        </div>
                    </div>

                    {/* Experience Start */}
                    <div className="about-page page-section" id="experience">
                        <div className="heading">EXPERIENCE</div>
                        <div className="experience-container">
                            <div className="row">
                                {dataService.experiences.map((experience, index) => {
                                    return (
                                        <div className="col-12" key={index}>
                                            <div className="experience-card">
                                                <div className="row">
                                                    <div className={'col-sm-12 col-md-4' + (index % 2 === 0 ? ' order-12' : '')}>
                                                        <img src={require('../' + experience.compnayLogo)} alt="elogist" />
                                                    </div>
                                                    <div className="col-sm-12 col-md-8">
                                                        <div className="ex-card">
                                                            {/* Header */}
                                                            <div className="experience-header">
                                                                <div className="row">
                                                                    <div className="col-12 experience-company">
                                                                        <span>{experience.company}</span>
                                                                        <span className="experience-position">{experience.position}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Body */}
                                                            <div className="ex-body">
                                                                <div className="ex-about">{experience.about}</div>
                                                                {experience.details.map((detail, dIndex) => {
                                                                    return (
                                                                        <div key={dIndex}>
                                                                            <div className="ex-detail-heading ">{detail.name}</div>
                                                                            <ul className="ex-details">
                                                                                {detail.info.map((info, key) => {
                                                                                    return (<li key={key}>{info}</li>)
                                                                                })}
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>

                                                            {/* Footer */}
                                                            <div className="ex-footer">
                                                                <div><span>{experience.duration}</span> <span>|</span> <span>{experience.location}</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>

                        </div>

                    </div>

                    {/* Experience End */}

                    {/* Projects Start */}
                    <div className="page-section" id="projects">
                        <div className="heading">PROJECTS</div>
                        <div className="section-info">
                            <div className="row">
                                {this.state.projectsHTML}
                            </div>
                        </div>
                    </div>
                    {/* Projects End */}


                    {/* Skills Start */}
                    <div className="apage-section" id="skills">
                        <div className="heading">SKILLS</div>
                        <div className="section-info">
                            <div className="skills-card">
                                <div className="skill">
                                    <img src={require('../assets/skills/html5.png')} alt="html5" />
                                    <span>HTML5</span>
                                </div>

                                <div className="skill">
                                    <img src={require('../assets/skills/css3.svg')} alt="css3" />
                                    <span>CSS3</span>
                                </div>

                                <div className="skill">
                                    <img src={require('../assets/skills/js.png')} alt="js" />
                                    <span>JavaScript</span>
                                </div>

                                <div className="skill">
                                    <img src={require('../assets/skills/angular.png')} alt="angular" />
                                    <span>Angular</span>
                                </div>

                                <div className="skill">
                                    <img src={require('../assets/skills/ionic.png')} alt="ionic" />
                                    <span>Ionic</span>
                                </div>

                                <div className="skill">
                                    <img src={require('../assets/skills/react.png')} alt="react" />
                                    <span>React</span>
                                </div>

                                <div className="skill">
                                    <img src={require('../assets/skills/nodejs.png')} alt="nodejs" />
                                    <span>NodeJS</span>
                                </div>

                                <div className="skill">
                                    <img src={require('../assets/skills/mongo.png')} alt="mongo" />
                                    <span>MongoDB</span>
                                </div>

                                <div className="skill">
                                    <img src={require('../assets/skills/python.png')} alt="pyton" />
                                    <span>Python</span>
                                </div>

                                <div className="skill">
                                    <img src={require('../assets/skills/selenium.png')} alt="selenium" />
                                    <span>Selenium</span>
                                </div>

                                <div className="skill">
                                    <img src={require('../assets/skills/git.png')} alt="git" />
                                    <span>GIT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Skills End */}

                    {/* Education Start */}
                    <div className="apage-section" id="education">
                        <div className="heading">EDUCATION</div>
                        <div className="section-info">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="card education-card">
                                        <div className="college-name"><a href="http://www.jnit.org/" target="_blank" rel="noopener noreferrer">Jagannath Gupta Institute of Engineering & Technology (JNIT)</a></div>
                                        <div className="education-city">Jaipur, Rajasthan</div>
                                        <div className="education-info">
                                            <span className="education-course">B. Tech.</span> <span className="education-stream">Computer Science</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="card education-card">
                                        <div className="college-name">
                                            <a href="http://www.nielit.gov.in/" target="_blank" rel="noopener noreferrer">National Institute of Electronics & Information Technology (NIELIT)</a></div>
                                        <div className="education-city">Mthura, Uttar Pradesh</div>
                                        <div className="education-info">
                                            <span className="education-course">O & A Level</span> <span className="education-stream">Computer Science</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Education End */}

                    {/* Contact Start */}
                    <div className="apage-section" id="contact">
                        <div className="heading">CONTACT</div>
                        <div className="section-info">
                            <div className="contact-info">
                                <i className="fa fa-envelope"></i> <a href="mailto:jkrana008@gmail.com">jkrana008@gmail.com</a>
                            </div>

                            <div className="contact-info">
                                <i className="fa fa-github"></i> <a href="https://github.com/jkrana008">github.com/jkrana008</a>
                            </div>

                            <div className="contact-info">
                                <i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/jai-rana/">linkedin.com/in/jai-rana/</a>
                            </div>

                        </div>
                    </div>
                    {/* Contact End */}

                </div>
            </div>
        );
    }

}

export default Website;
