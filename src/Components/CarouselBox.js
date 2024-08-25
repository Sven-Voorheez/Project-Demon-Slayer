import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import mudzanchik from "../assets/mudzanchik.png";
import douma from "../assets/douma.jpg";
import akaza from "../assets/akaza.png";
import devushka_s_bivoy from "../assets/devushka_s_bivoy.avif";
import hantengu from "../assets/hantengu.webp";
import gyokko from "../assets/gyokko.webp";
import gyutaro from "../assets/gyutaro.webp";
import kokushibo from "../assets/kokushibo.jpg";

export default class CarouselBox extends Component {
    render() {
        const imageStyle = {
             width: '100%',
  height: 'auto',
        };

        const imageWrapperStyle = {
            
            position: 'relative', 
            overflow: 'hidden',
        };

        return (
            <Carousel >
                <Carousel.Item>
                    <div style={imageWrapperStyle}>
                        <img
                            className='d-block w-100'
                            src={mudzanchik}
                            alt='mudzanchik'
                            style={imageStyle}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Mudzan</h3>
                        <p>Лидер всех демонов</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={imageWrapperStyle}>
                        <img
                            className='d-block w-100'
                            src={kokushibo}
                            alt='kokushibo'
                            style={imageStyle}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Kokushibo</h3>
                        <p>Первая высшая луна</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={imageWrapperStyle}>
                        <img
                            className='d-block w-100'
                            src={douma}
                            alt='douma'
                            style={imageStyle}
                        />
                         <Carousel.Caption>
                        <h3>Douma</h3>
                        <p>Вторая высшая луна</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={imageWrapperStyle}>
                        <img
                            className='d-block w-100'
                            src={akaza}
                            alt='akaza'
                            style={imageStyle}
                        />
                        <Carousel.Caption>
                        <h3>Akaza</h3>
                        <p>Третья высшая луна</p>
                    </Carousel.Caption>
                    </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <div style={imageWrapperStyle}>
                        <img
                            className='d-block w-100'
                            src={devushka_s_bivoy}
                            alt='devushka_s_bivoy'
                            style={imageStyle}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Namike</h3>
                        <p>Новая четвёртая высшая луна</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={imageWrapperStyle}>
                        <img
                            className='d-block w-100'
                            src={hantengu}
                            alt='hantengu'
                            style={imageStyle}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Hantengu</h3>
                        <p>четвёртая высшая луна</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={imageWrapperStyle}>
                        <img
                            className='d-block w-100'
                            src={gyokko}
                            alt='gyokko'
                            style={imageStyle}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Gyokko</h3>
                        <p>Пятая высшая луна</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={imageWrapperStyle}>
                        <img
                            className='d-block w-100'
                            src={gyutaro}
                            alt='gyutaro'
                            style={imageStyle}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Gyutaro</h3>
                        <p>Шестая высшая луна</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}