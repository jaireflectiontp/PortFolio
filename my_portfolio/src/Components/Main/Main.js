import React from 'react';
import AboutImg from "../../imgs/introImg.png";
import AboutPng from "../../imgs/about.webp";
import AboutBanner from "../../imgs/about-banner.png";
import EduLogo from "../../imgs/education logo.png";
import htmlLogo from "../../imgs/html.svg";
import cssLogo from "../../imgs/css.svg";
import jsLogo from "../../imgs/js.png";
import reactLogo from "../../imgs/React.png";
import bootstrapLogo from "../../imgs/bootstrap.png";
import sassLogo from "../../imgs/sass.svg";
import nodejs from "../../imgs/nodejs.png";
import "../../SCSS/_main.scss";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Main = () => {
    return (
        <main>
            <section class="intro" id="home">
                <div class="intro_left">
                    <img src={AboutImg} alt="my_image" />
                </div>
                <div class="intro_right">
                    <h4>Jay Rautel</h4>
                    <h1>I'm A Web<br /> <span>Developer</span></h1>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Doloremque Illum Nam Nobis, Minima
                        Laudantium Fugit Sequi Nostrum Quod Impedit, Beatae Necessitatibus Praesentium Optio Labore
                        Nemo!</p>
                    <div class="download_btn">
                        <a href="" download="PDF">
                            <button> Download CV</button>
                        </a>
                    </div>
                </div>
            </section>

            <section class="about" id="about">
                <div class="about_left">
                    <h1 class="section-heading">About <span>Me</span></h1>
                    <h3>Hello! I'm <span>Jay Rautel</span>.</h3>
                    <p>A Frontend Web Developer also an aspiring Full-Stack Web Developer</p>
                    <p>I am an enthusiast learner, so far
                        i have worked with frontend technology such as HTML, CSS, JavaScript, ReactJs, Jquery, BootStarp &
                        Looking forward to apply my skills and knowledge as a developer to the growth of the organization.
                    </p>
                </div>
                <div class="about_right">
                    <img src={AboutPng} alt="about-banner" />
                </div>
            </section>

            <section class="education" id="education">
                <h1 class="section-heading">Education</h1>

                <div class="education_container">
                    <div class="edu_left"><img src={AboutBanner} alt="my_image" /></div>
                    <div class="edu_right">
                        <div class="education_board">
                            <div class="board_logo"><img src={EduLogo} alt="education" /></div>
                            <div class="board_content">
                                <small class="educational_year">2016-2018</small>
                                <p class="education_field">Higher Secondary Education</p>
                                <p class="institution">Bhalerao Jr. College Of Science, Saoner</p>
                            </div>
                        </div>
                        <div class="education_board">
                            <div class="board_logo"><img src={EduLogo} alt="education" /></div>
                            <div class="board_content">
                                <small class="educational_year">2018-2022</small>
                                <p class="education_field">Bachelor of Engineering</p>
                                <p class="institution">Jhulelal Institute Of Technology, Nagpur</p>
                            </div>
                        </div>
                        <div class="education_board">
                            <div class="board_logo"><img src={EduLogo} alt="education" /></div>
                            <div class="board_content">
                                <small class="educational_year">2022-Present</small>
                                <p class="education_field">Full Stack Web Development</p>
                                <p class="institution">Reflection Training Academy, Nagpur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="skills">
                <div class="heading"><h1 class="section-heading">Skills</h1></div>
                <hr className='skill_trunk' />
                <div class="skill_sets">
                    <div class="skill_list">
                        <div class="skill_name"><img src={htmlLogo} alt="" /></div>
                    </div>
                    <div class="skill_list">
                        <div class="skill_name"><img src={cssLogo} alt="" /></div>
                    </div>
                    <div class="skill_list">
                        <div class="skill_name"><img src={jsLogo} alt="" /></div>
                    </div>
                    <div class="skill_list">
                        <div class="skill_name"><img src={reactLogo} alt="" /></div>
                    </div>
                    <div class="skill_list">
                        <div class="skill_name"><img src={bootstrapLogo} alt="" /></div>
                    </div>
                    <div class="skill_list">
                        <div class="skill_name"><img src={sassLogo} alt="" /></div>
                    </div>
                    <div class="skill_list">
                        <div class="skill_name"><img src={nodejs} alt="" /></div>
                    </div>
                </div>
            </section>


            <section class="projects" id="projects">

            </section>

            <section class="contact" id="contact">
                <div class="heading"> <h1 class="section-heading">Contact</h1></div>
                <div class="contact_container">
                    <div class="connect_me">
                        <div class="input_controls">
                            <input type="text" name="name" />
                            <label for="name">Name</label>
                        </div>
                        <br />
                        <div class="input_controls">
                            <input type="mail" name="email" />
                            <label for="email">Email</label>
                        </div>
                        <br />
                        <div class="msg_controls">
                            <textarea name="message" placeholder="Type your message....." id="" cols="30"
                                rows="10"></textarea>
                            <label for="message">Message</label>
                        </div>

                        <div class="send_btn"> <Button variant="contained" endIcon={<SendIcon fontSize="large" />}>
                            Send
                        </Button></div>
                    </div>

                    <div class="contact_details">
                        <div class="contact_info">
                            <div class="detail_container">
                                <div class="info_icon"><MailOutlineIcon fontSize="large" color="secondary"  /></div>
                                <div class="info_context">jayrautel625@gmail.com</div>
                            </div>

                            <div class="detail_container">
                                <div class="info_icon"><CallOutlinedIcon fontSize="large" color="secondary"  /></div>
                                <div class="info_context">+91-9146635275</div>
                            </div>

                            <div class="detail_container">
                                <div class="info_icon"><LocationOnOutlinedIcon fontSize="large" color="secondary"  /></div>
                                <div class="info_context">Khapa, Saoner, Dist-Nagpur, Maharashtra, India 441101</div>
                            </div>
                        </div>
                        <div class="social_contact">
                            <div class="social_links"><a href="https://www.linkedin.com/in/jay-rautel-96b57b20a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJeUkgAYgS86sPZGuPEAnAw%3D%3D"><LinkedInIcon fontSize='large'/></a></div>
                            <div class="social_links"><a href="https://github.com/jaireflectiontp"><GitHubIcon fontSize='large'/></a></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main
