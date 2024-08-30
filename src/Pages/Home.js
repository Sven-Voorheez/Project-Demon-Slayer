
import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, Card, CardGroup, Button, Row, Col } from "react-bootstrap";
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className='Main-Images'>
          <CarouselBox />
        </div>
        <Container>
          <h1 className='text-center m-4' style={{ color: 'red' }}>Our team</h1>
          <CardGroup className='Home-Card_Group m-4'>
            <Row>
              <Col sm={6} className='d-flex'>
                <Card bg="light" text="dark" className='m-4' style={{ borderRadius: '12px', backgroundColor: '#E1E1E1' }}>
                  <Card.Img
                    variant='top'
                    style={{ borderRadius: '10px', objectFit: 'cover' }}
                    src='https://avatars.mds.yandex.net/i?id=10ce0deead59461be2affbb0d723a8d5_l-10355097-images-thumbs&n=13'
                  />
                  <Card.Body>
                    <Card.Title className='text-center' style={{ color: '#9E9E9E' }}>Douma</Card.Title>
                    <Card.Text className='text-center'>Демон с ледяными способностями, создающий смертоносные ледяные атаки и имеющий бездушный характер.</Card.Text>
                  </Card.Body>
                  <Button variant='secondary' className='w-100' style={{ backgroundColor: '#757575', borderColor: '#757575' }}>About Team</Button>
                </Card>
              </Col>
              <Col sm={6} className='d-flex'>
                <Card bg="light" text="dark" className='m-4' style={{ borderRadius: '12px', backgroundColor: '#E1E1E1' }}>
                  <Card.Img
                    variant='top'
                    style={{ borderRadius: '10px', objectFit: 'cover' }}
                    src='https://avatars.mds.yandex.net/i?id=1754a151b13a18d75729dc8686b17557_l-5293164-images-thumbs&n=13'
                  />
                  <Card.Body>
                    <Card.Title className='text-center' style={{ color: '#9E9E9E' }}>Gyutaro</Card.Title>
                    <Card.Text className='text-center'>Демон, специализирующийся на атаках с использованием крови и способный причинять серьёзные повреждения своим врагам.</Card.Text>
                  </Card.Body>
                  <Button variant='secondary' className='w-100' style={{ backgroundColor: '#757575', borderColor: '#757575' }}>About Team</Button>
                </Card>
              </Col>
              <Col sm={6} className='d-flex'>
                <Card bg="light" text="dark" className='m-4' style={{ borderRadius: '12px', backgroundColor: '#E1E1E1' }}>
                  <Card.Img
                    variant='top'
                    style={{ borderRadius: '10px', objectFit: 'cover' }}
                    src='https://m.media-amazon.com/images/M/MV5BMjIyNDQ5OTctNjZhMi00NDUxLWFjYzEtYWRlMzkxNDZmMTVlXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg'
                  />
                  <Card.Body>
                    <Card.Title className='text-center' style={{ color: '#9E9E9E' }}>Gyokko</Card.Title>
                    <Card.Text className='text-center'>Обладает способностями к манипуляции и созданию разрушительных атак. Его умение управлять окружением делает его опасным противником.</Card.Text>
                  </Card.Body>
                  <Button variant='secondary' className='w-100' style={{ backgroundColor: '#757575', borderColor: '#757575' }}>About Team</Button>
                </Card>
              </Col>
              <Col sm={6} className='d-flex'>
                <Card bg="light" text="dark" className='m-4' style={{ borderRadius: '12px', backgroundColor: '#E1E1E1' }}>
                  <Card.Img
                    variant='top'
                    style={{ borderRadius: '10px', objectFit: 'cover' }}


src='https://avatars.mds.yandex.net/i?id=5853dba9caea66cea054fc207adf25d9_l-12441729-images-thumbs&n=13'
                  />
                  <Card.Body>
                    <Card.Title className='text-center' style={{ color: '#9E9E9E' }}>Akaza</Card.Title>
                    <Card.Text className='text-center'>Демон, обладающий высокой физической силой и мастерством в боевых искусствах. Он ищет сильных противников и наслаждается поединками.</Card.Text>
                  </Card.Body>
                  <Button variant='secondary' className='w-100' style={{ backgroundColor: '#757575', borderColor: '#757575' }}>About Team</Button>
                </Card>
              </Col>
              <Col sm={6} className='d-flex'>
                <Card bg="light" text="dark" className='m-4' style={{ borderRadius: '12px', backgroundColor: '#E1E1E1' }}>
                  <Card.Img
                    variant='top'
                    style={{ borderRadius: '10px', objectFit: 'cover' }}
                    src='https://avatars.mds.yandex.net/i?id=49a8cd6477f0d6d8feff4e221be0cdda_l-5235483-images-thumbs&n=13'
                  />
                  <Card.Body>
                    <Card.Title className='text-center' style={{ color: '#9E9E9E' }}>Mudzan</Card.Title>
                    <Card.Text className='text-center'>Лидер всех демонов и высших лун, обладающий огромной силой и способностью изменять своё тело. Его цель — стать совершенным существом и избежать света дня.</Card.Text>
                  </Card.Body>
                  <Button variant='secondary' className='w-100' style={{ backgroundColor: '#757575', borderColor: '#757575' }}>About Team</Button>
                </Card>
              </Col>
              <Col sm={6} className='d-flex'>
                <Card bg="light" text="dark" className='m-4' style={{ borderRadius: '12px', backgroundColor: '#E1E1E1' }}>
                  <Card.Img
                    variant='top'
                    style={{ borderRadius: '10px', objectFit: 'cover' }}
                    src='https://i.ytimg.com/vi/Uo2D_4RSTOI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gEygfMA8=&amp;rs=AOn4CLAUBXXBYn_bpGckXtW_wVqc5TxwMg'
                  />
                  <Card.Body>
                    <Card.Title className='text-center' style={{ color: '#9E9E9E' }}>Kokushibo</Card.Title>
                    <Card.Text className='text-center'>Первая Верхняя Луна и бывший охотник на демонов, ставший демоном из-за стремления к силе. Он использует технику дыхания луны и обладает шестью глазами, что делает его практически непобедимым. Кокушибо одержим идеей превзойти своего брата Йоричи.</Card.Text>
                  </Card.Body>
                  <Button variant='secondary' className='w-100' style={{ backgroundColor: '#757575', borderColor: '#757575' }}>About Team</Button>
                </Card>
              </Col>
              <Col sm={6} className='d-flex'>
                <Card bg="light" text="dark" className='m-4' style={{ borderRadius: '12px', backgroundColor: '#E1E1E1' }}>
                  <Card.Img
                    variant='top'
                    style={{ borderRadius: '10px', objectFit: 'cover' }}
                    src='https://staticg.sportskeeda.com/editor/2024/05/48f86-17169322502192-1920.jpg'
                  />
                  <Card.Body>
                    <Card.Title className='text-center' style={{ color: '#9E9E9E' }}>Nakima</Card.Title>
                    <Card.Text className='text-center'>Демон, ставшая новой Четвёртой Верхней Луной после смерти Хантэнгу. Она управляет бесконечным замком Муцана, манипулируя его пространствами с помощью игры на биве. Её способности делают её ключевой фигурой в защите Муцана от охотников на демонов.</Card.Text>
                  </Card.Body>
                  <Button variant='secondary'></Button>


<Button variant='secondary' className='w-100' style={{ backgroundColor: '#757575', borderColor: '#757575' }}>About Team</Button>
                </Card>
              </Col>
              <Col sm={6} className='d-flex'>
                <Card bg="light" text="dark" className='m-4' style={{ borderRadius: '12px', backgroundColor: '#E1E1E1' }}>
                  <Card.Img
                    variant='top'
                    style={{ borderRadius: '10px', objectFit: 'cover' }}
                    src='https://avatars.mds.yandex.net/i?id=f8f9bc41a84255402ab148307b1ba846_l-9151051-images-thumbs&n=13'
                  />
                  <Card.Body>
                    <Card.Title className='text-center' style={{ color: '#9E9E9E' }}>Hantengo</Card.Title>
                    <Card.Text className='text-center'>Четвёртая Верхняя Луна, способный разделяться на клонов, воплощающих разные эмоции. В своей основной форме он выглядит как слабый, перепуганный старик. Его способности делают его крайне трудным противником, постоянно избегая прямых атак.</Card.Text>
                  </Card.Body>
                  <Button variant='secondary' className='w-100' style={{ backgroundColor: '#757575', borderColor: '#757575' }}>About Team</Button>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </Container>
      </>
    );
  }
}