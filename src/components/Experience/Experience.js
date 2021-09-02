import { Stack, Box, Diagram, Text, Paragraph} from 'grommet';
import React from 'react';
import './Experience.css';

function Experience (){
    return (
        <div>
            <Stack guidingChild={1}>
                <Diagram
                    connections={[
                        {
                          fromTarget: '1',
                          toTarget: '2',
                          thickness: 'xsmall',
                          color: '#F26C0B',
                        },
                        {
                          fromTarget: '2',
                          toTarget: '3',
                          thickness: 'xsmall',
                          color: '#F26C0B',
                          type: 'rectilinear',
                        },
                      ]}
                >
                </Diagram>
                <Box>
                    <Box direction="row" gap="large">
                        <Box id ="3" height="small" width="large" margin="small" pad="medium" background="light-1" overflow="scroll">
                            <Text className="experience-role" color="#F26C0B">Software Engineer</Text>
                            <Text className="experience-side-heading" color="brand">Presidio Cloud Solutions (Formerly Coda Global) - Chennai, India</Text>
                            <Paragraph style={{width:"100%"}}>
                                <ul>
                                    <li><Text>Designed, Developed and Deployed highly efficient software applications with intelligence algorithms and frameworks</Text></li>
                                    <li><Text>Involved in various UI Development, Framework Developement and Library Development in improving development process</Text></li>
                                    <li><Text>Developed efficient system design with apropriate schema to support elasticity and agility</Text></li>
                                    <li><Text>Mentored other junior developers in their projects and reviewed their code for better competancy</Text></li>
                                </ul>
                            </Paragraph>
                        </Box>
                    </Box>
                    <Box direction="row" gap="large">
                        <Box id="2" height="small" width="large" margin="small" pad="medium" background="light-1" overflow="scroll">
                            <Text className="experience-role" color="#F26C0B">Junior Software Engineer</Text>
                            <Text className="experience-side-heading" color="brand">Full Creative - Chennai, India</Text>
                            <Paragraph>
                                <ul>
                                    <li><Text>Deployed into one of the core engineerin of an online scheduling platform</Text></li>
                                    <li><Text>Played a curcial role in developing API's, Micro-Libraries, Frameworks, Frontent Pieces throghtout the product</Text></li>
                                    <li><Text>Involved in developing light weight Java Based Library and Framework to improve overall development process</Text></li>
                                </ul>
                            </Paragraph>
                        </Box>
                        <Box id ="1" height="small" width="large" margin="small" pad="medium" background="light-1" overflow="scroll">
                            <Text className="experience-role" color="#F26C0B">Full Stack Developer Internship</Text>
                            <Text className="experience-side-heading" color="brand">Full Creative - Chennai, India</Text>
                            <Paragraph>
                                <ul>
                                    <li><Text>Worked with engineering team in developing essential software developement skills</Text></li>
                                    <li><Text>Developed a capstone project and excelled with best student intern award</Text></li>
                                </ul>
                            </Paragraph>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </div>
    )
}

export default Experience;