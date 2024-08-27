import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div className='about-div'>
                <Container >
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-2">
                                    <Nav.Item>
                                        <Nav.Link className='About-Link' eventKey="first">Nature</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='About-Link' eventKey="second">Swamp</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='About-Link' eventKey="third">Rain</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='About-Link' eventKey="fourth">Mountains</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">Sky</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="image-container">
                                            <img src="https://gas-kvas.com/grafic/uploads/posts/2023-10/1696602072_gas-kvas-com-p-kartinki-s-prirodoi-51.jpg" alt='Design' />
                                        </div>
                                        <p className='About-description'>Как же это красиво </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="image-container">
                                            <img src="https://baldezh.top/uploads/posts/2022-08/1660720631_12-funart-pro-p-bolotnie-rasteniya-priroda-krasivo-foto-13.jpg" alt="Swamp" />
                                        </div>
                                        <p className='About-description'>Как же это красиво </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="image-container">
                                            <img src="https://i.ytimg.com/vi/_o1qsGcZtFU/maxresdefault.jpg" alt="Rain" />
                                        </div>
                                        <p className='About-description'>Как же это красиво </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="image-container">
                                            <img src="https://avatars.mds.yandex.net/i?id=e53b6b50a20ea1c7ab75487142ce3f80_l-5220549-images-thumbs&n=13" alt="Mountains" />
                                        </div>
                                        <p className='About-description'>Как же это красиво </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="image-container">
                                            <img src="https://avatars.mds.yandex.net/i?id=5b507e5bb3b9a6af1863cdb7b6bca496_l-5232907-images-thumbs&n=13" alt="Sky" />
                                        </div>
                                        <p className='About-description'>Как же это красиво </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        );
    }
}
