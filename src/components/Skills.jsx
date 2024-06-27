import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter from "../assets/images/meter.png"
import colorSharp from "../assets/images/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-box'>
                            <h2>
                                Skills
                            </h2>
                            <p>"Building cool websites with HTML, CSS, and JavaScript,
                            and making them even cooler with React and Node.js."</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                                <div className='circle'>
                                    <img src={meter} alt='image' />
                                    <div className='overlay'>
                                        <h5>80%</h5>
                                    </div>
                                </div>
                                <h5>JavaScript</h5>
                            </div>
                            <div className='item'>
                                <div className='circle'>
                                    <img src={meter} alt='image' />
                                    <div className='overlay'>
                                        <h5>90%</h5>
                                    </div>
                                </div>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className='item'>
                                <div className='circle'>
                                    <img src={meter} alt='image' />
                                    <div className='overlay'>
                                        <h5>70%</h5>
                                    </div>
                                </div>
                                <h5>ReactJS</h5>
                            </div>
                            <div className='item'>
                                <div className='circle'>
                                    <img src={meter} alt='image' />
                                    <div className='overlay'>
                                        <h5>70%</h5>
                                    </div>
                                </div>
                                <h5>NodeJS</h5>
                            </div>
                            <div className='item'>
                                <div className='circle'>
                                    <img src={meter} alt='image' />
                                    <div className='overlay'>
                                        <h5>95%</h5>
                                    </div>
                                </div>
                                <h5>Databases</h5>
                            </div>
                            <div className='item'>
                                <div className='circle'>
                                    <img src={meter} alt='image' />
                                    <div className='overlay'>
                                        <h5>60%</h5>
                                    </div>
                                </div>
                                <h5>APIs</h5>
                            </div>
                            <div className='item'>
                                <div className='circle'>
                                    <img src={meter} alt='image' />
                                    <div className='overlay'>
                                        <h5>90%</h5>
                                    </div>
                                </div>
                                <h5>Designing</h5>
                            </div>
                            <div className='item'>
                                <div className='circle'>
                                    <img src={meter} alt='image' />
                                    <div className='overlay'>
                                        <h5>90%</h5>
                                    </div>
                                </div>
                                <h5>Java</h5>
                            </div>
                            <div className='item'>
                                <div className='circle'>
                                    <img src={meter} alt='image' />
                                    <div className='overlay'>
                                        <h5>85%</h5>
                                    </div>
                                </div>
                                <h5>Python</h5>
                            </div>
                            <div className='item'>
                                <div className='circle'>
                                    <img src={meter} alt='image' />
                                    <div className='overlay'>
                                        <h5>90%</h5>
                                    </div>
                                </div>
                                <h5>Front-End Development</h5>
                            </div>
                            <div className='item'>
                                <div className='circle'>
                                    <img src={meter} alt='image' />
                                    <div className='overlay'>
                                        <h5>90%</h5>
                                    </div>
                                </div>
                                <h5>Web Development</h5>
                            </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
      )
}