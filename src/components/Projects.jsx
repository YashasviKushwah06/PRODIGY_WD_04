import { Container, Row, Col, Nav, TabContainer, TabPane } from "react-bootstrap"
import { Robot } from "react-bootstrap-icons"
import { ProjectCard } from "./ProjectCard"
import colorSharp from "../assets/images/color-sharp.png"
import project1 from "../assets/images/project1.png"
import project2 from "../assets/images/project2.png"
import project3 from "../assets/images/project3.png"
import project4 from "../assets/images/project4.png"
import project5 from "../assets/images/project5.png"
import project6 from "../assets/images/project6.png"

export const Projects = () => {
    const projects = [
        {
            title: "Business made easy",
            description: "Entrepreneurial",
            imgURL: project1
        },
        {
            title: "Backpack Traveling",
            description: "Travel & Fun",
            imgURL: project2
        },
        {
            title: "Business Startup",
            description: "Entrepreneurial",
            imgURL: project3
        },
        {
            title: "Food & Nutrition",
            description: "Health",
            imgURL: project4
        },
        {
            title: "Online Shopping",
            description: "Fashion",
            imgURL: project5
        },
        {
            title: "Metaverse",
            description: "Computers",
            imgURL: project6
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>"Building awesome websites and apps that 
                        make life easier and more fun for everyone!"</p>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabPane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </TabPane>
                            <TabPane eventKey="second">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                                qui officia deserunt mollit anim id est laborum
                            </TabPane>
                            <TabPane eventKey="third">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                                qui officia deserunt mollit anim id est laborum
                            </TabPane>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp}></img>
        </section>
    )
}