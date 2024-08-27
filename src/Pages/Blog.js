import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Card, Image } from 'react-bootstrap';
import './Blog.css';

export default class Blog extends Component {
    state = {
        selectedCategory: 'All',
        posts: [
            { id: 1, category: 'Gyomei Himejima', title: 'Gyomei Himejima', text: 'Гёмей Хими — персонаж из манги и аниме «Клинок, рассекающий демонов» (Demon Slayer). Он является одним из старших братьев-сверхлюдей, обладающих высокой силой и навыками в борьбе с демонами. Хими также известен своим строгим и решительным характером, а также тем, что он один из опекунов младших членов своей команды.', image: 'https://i.pinimg.com/736x/9d/a6/0f/9da60f58b4bbbc5ad5a1e8bd6591f9ac.jpg' },
            { id: 2, category: 'Sanemi Shinazugawa', title: 'Sanemi Shinazugawa', text: 'Санеми Шинадзугава — персонаж из манги и аниме «Клинок, рассекающий демонов» (Demon Slayer). Он является Вершинным Пилотом Дэма (Hashira) и занимает должность Пилота Ветра. Санеми известен своей бескомпромиссной жестокостью и неприступным характером, но при этом он обладает выдающимися боевыми навыками и глубокой преданностью делу борьбы с демонами.', image: 'https://i.pinimg.com/originals/f3/9f/a7/f39fa72837995178d0a08e034776b503.png' },
            { id: 3, category: 'Giyu Tomioka', title: 'Giyu Tomioka', text: 'Тамиока Гию — это Вершинный Пилот Воды (Water Hashira) в манге и аниме «Клинок, рассекающий демонов» (Demon Slayer). Гию известен своим мастерством в технике Дыхания Воды и строгим, но справедливым характером. Он играет важную роль в обучении главного героя Танаджиро Камадо, а также в борьбе против демонов, демонстрируя выдающиеся боевые навыки и решимость.', image: 'https://avatars.mds.yandex.net/i?id=9ab0a130883c48810a8a64a7a76873ea938228d5-9601511-images-thumbs&n=13' },
            { id: 4, category: 'Mitsuri Kanroji', title: 'Mitsuri Kanroji', text: 'Мицури Канроджи — персонаж из манги и аниме «Клинок, рассекающий демонов» (Demon Slayer). Она является Вершинным Пилотом Любви (Love Hashira) и известна своим уникальным стилем боя, основанным на дыхании любви. Мицури отличается яркой, дружелюбной и заботливой личностью, а её боевые навыки и преданность делу борьбы с демонами делают её важным членом команды охотников на демонов.', image: 'https://pm1.aminoapps.com/8731/95543bf19964e3d2328bb8f12e11c32c6bec4774r1-2048-1152v2_00.jpg' },
            { id: 5, category: 'Kyojuro Rengoku ', title: 'Kyojuro Rengoku ', text: 'Кёсюро Ренгоку (Kyojuro Rengoku) — Вершинный Пилот Пламени (Flame Hashira), известный своим мощным и пламенным стилем боя, основанным на дыхании пламени. Он обладает ярким и харизматичным характером, вдохновляя других своим оптимизмом и преданностью делу. Ренгоку сыграл ключевую роль в борьбе с демоном в поезде.', image: 'https://avatars.mds.yandex.net/i?id=d889218fbef1ad906251ecc779694718_l-3322605-images-thumbs&n=13' },
            { id: 6, category: 'Tengen Uzui', title: 'Tengen Uzui', text: 'Тэнген Узуи (Tengen Uzui) — Вершинный Пилот Звука (Sound Hashira), использует стиль боя, основанный на дыхании звука, и выделяется своим экстравагантным поведением и любовью к роскоши. Он обладает выдающимися боевыми навыками и стратегическим умом, что делает его ценным союзником в борьбе с демонами. Тэнген играет ключевую роль в различных миссиях охотников на демонов.', image: 'https://w.forfun.com/fetch/06/06d2d49ac0d7c2b6d6cab7408d6bab08.jpeg' },
            { id: 7, category: 'Shinobu Kocho ', title: 'Shinobu Kocho ', text: 'Шинобу Кодзё (Shinobu Kocho) — Вершинный Пилот Насекомых (Insect Hashira), использует стиль боя, основанный на дыхании насекомых, и известна своим искусством отравления демонов. Она умела скрывать свои настоящие чувства за дружелюбной маской и глубоко заботится о своих учениках. Шинобу также известна своей решимостью и жертвой ради защиты человечества.', image: 'https://avatars.mds.yandex.net/i?id=990652d369fe96bf2d5d1437c02e7666_l-9065816-images-thumbs&n=13' },
        ]
    };

    handleCategorySelect = (category) => {
        this.setState({ selectedCategory: category });
    };

    render() {
        const { selectedCategory, posts } = this.state;

        // Фильтрация постов по выбранной категории
        const filteredPosts = selectedCategory === 'All'
            ? posts
            : posts.filter(post => post.category === selectedCategory);

        return (
            <Container>
                <Row>
                    <Col md={3}>

                        <h4 className='text-center mt-5' >All Hashira</h4>
                        <div className='category-card-wrapper'>
                            <Card className='Blog-Select'>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item action onClick={() => this.handleCategorySelect('All')}>All</ListGroup.Item>
                                    <ListGroup.Item action onClick={() => this.handleCategorySelect('Gyomei Himejima')}>Gyomei Himejima</ListGroup.Item>
                                    <ListGroup.Item action onClick={() => this.handleCategorySelect('Sanemi Shinazugawa')}>Sanemi Shinazugawa</ListGroup.Item>
                                    <ListGroup.Item action onClick={() => this.handleCategorySelect('Giyu Tomioka')}>Giyu Tomioka</ListGroup.Item>
                                    <ListGroup.Item action onClick={() => this.handleCategorySelect('Mitsuri Kanroji')}>Mitsuri Kanroji</ListGroup.Item>
                                    <ListGroup.Item action onClick={() => this.handleCategorySelect('Kyojuro Rengoku ')}>Kyojuro Rengoku </ListGroup.Item>
                                    <ListGroup.Item action onClick={() => this.handleCategorySelect('Tengen Uzui')}>Tengen Uzui</ListGroup.Item>
                                    <ListGroup.Item action onClick={() => this.handleCategorySelect('Shinobu Kocho ')}>Shinobu Kocho</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                    </Col>
                    <Col md={9}>
                        {filteredPosts.map(post => (
                            <div key={post.id} className='post'>
                                <Image
                                    width={150}
                                    height={150}
                                    src={post.image}
                                    alt={post.title}
                                    rounded
                                    className='post-image'
                                />
                                <div className='post-content'>
                                    <h5>{post.title}</h5>
                                    <p>{post.text}</p>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Card className='mt-5'>
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>Some side widget content</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}