import { Card, Box, CardHeader, Text, CardFooter, CardBody, Anchor } from 'grommet';
import { Github, Link} from 'grommet-icons';
import React from 'react';
import './Projects.css'

function Projects() {
    return (
        <div className="about-container">
            <Box direction="row" gap="medium" pad="small">
                <Card height="small" width="medium" background="light-1">
                    <CardHeader pad="small"><Text className="projects-heading">Language Learning Assitant</Text></CardHeader>
                    <CardBody pad="medium" overflow="scroll" height="small" className="project-body">
                        Tech Stack : React Native, React, Java (Spring Boot), Cloud Functions, NoSQL, Firebase.
                        <p>This apps help us to memorise new vocabs and other stuff whil we learn a new app, also has an inbuilt language conversion algorithm to assit.</p>
                    </CardBody>
                    <CardFooter pad={{ horizontal: "small" }} background="light-2">
                        <Anchor
                            icon={<Github></Github>}
                            href="https://github.com/GiriRaj12/react-firebase-mobileApp"
                            target="_blank"
                        />
                         <Anchor icon={<Link></Link>} href="https://drive.google.com/file/d/1T4X_nlh9OJ9Cwc82Hq-WkeVi-I2xnuCr/view" target="_blank"/>
                    </CardFooter>
                </Card>
                <Card height="small" width="medium" background="light-1">
                    <CardHeader pad="small"><Text className="projects-heading">ECommerse Application</Text></CardHeader>
                    <CardBody pad="medium" overflow="scroll" height="small" className="project-body">
                        Tech Stack : JS, Java-Servlet, GCP, NoSQL, CSS
                        <p>A Simple ECommerce application built with efficient algorithms.</p>
                    </CardBody>
                    <CardFooter pad={{ horizontal: "small" }} background="light-2">
                        <Anchor
                            icon={<Github></Github>}
                            href="https://github.com/GiriRaj12/Project-01"
                            target="_blank"
                        />
                         <Anchor icon={<Link></Link>} href="http://project-01-230407.appspot.com/"
                            target="_blank"/>
                    </CardFooter>
                </Card>
            </Box>
            <Box direction="row" gap="medium" pad="small">
                <Card height="small" width="medium" background="light-1">
                    <CardHeader pad="small"><Text className="projects-heading">Quizz App</Text></CardHeader>
                    <CardBody pad="medium" overflow="scroll" height="small" className="project-body">
                        Tech Stack : React, Firebase, Cloud Functions, NoSQL, SendGrid (Email API)
                        <p>Built a quizz application for an internal competition</p>
                    </CardBody>
                    <CardFooter pad={{ horizontal: "small" }} background="light-2">
                        <Anchor
                            icon={<Github></Github>}
                            href="https://github.com/GiriRaj12/question-app-frontend"
                            target="_blank"
                        />
                        <Anchor icon={<Link></Link>} href="https://naughty-spence-a176cb.netlify.app/" target="_blank"/>
                    </CardFooter>
                </Card>
                <Card height="small" width="medium" background="light-1">
                    <CardHeader pad="small"><Text className="projects-heading">Apps Under Progress</Text></CardHeader>
                    <CardBody pad="medium" overflow="scroll" height="small" className="project-body">
                        Apps aimed on ML, Algorithms, OpenSource, API Automation, etc
                    </CardBody>
                    <CardFooter pad={{ horizontal: "small" }} background="light-2">
                        <Anchor
                            icon={<Github></Github>}
                            href="https://github.com/GiriRaj12?tab=repositories"
                            hoverIndicator
                        />
                    </CardFooter>
                </Card>
            </Box>
        </div>
    )
}

export default Projects;