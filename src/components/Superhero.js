import { Card, Container, Col, Row, Image } from 'react-bootstrap';
import antMan from '../assets/images/superhero/antman.jpg';
import avenger from '../assets/images/superhero/avenger.jpg';
import batman from '../assets/images/superhero/batman.jpg';
import robinhood from '../assets/images/superhero/robinhood.jpg';
import spiderman from '../assets/images/superhero/spiderman-cover.jpg';
import superman from '../assets/images/superhero/superman.jpg';

const SuperHero =() => {
    return (
    <Container>
        <br />
        <h1 className='text-white'>Superhero Movies</h1>
        <br />
     <Row>
        <Col md={4} className="movieWrapper" id='superhero' >
        <Card className="bg-dark text-white movieImage">
      <Image
        src={antMan}
        alt="AntMan Movies"
        className='images'
        />
        <Card.Title className='text-center p-2 m-1'>AntMan</Card.Title>
        <Card.Text className='text-left'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
    </Card>
    </Col>
    <Col md={4} className="movieWrapper" >
    <Card className="bg-dark text-white movieImage">
      <Image
        src={avenger}
        alt="Avenger Movies"
        className='images'
        />
        <Card.Title className='text-center p-2 m-1'>Avenger</Card.Title>
        <Card.Text className='text-left'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
    </Card>
    </Col>
    <Col md={4} className="movieWrapper" >
        <Card className="bg-dark text-white movieImage">
      <Image
        src={batman}
        alt="Batman Movies"
        className='images'
        />
        <Card.Title className='text-center p-2 m-1'>Batman</Card.Title>
        <Card.Text className='text-left'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
    </Card>
    </Col>
    <Col md={4} className="movieWrapper" >
        <Card className="bg-dark text-white movieImage">
      <Image
        src={robinhood}
        alt="Robinhood Movies"
        className='images'
        />
        <Card.Title className='text-center p-2 m-1'>Robinhood</Card.Title>
        <Card.Text className='text-left'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
    </Card>
    </Col>
    <Col md={4} className="movieWrapper" >
        <Card className="bg-dark text-white movieImage">
      <Image
        src={spiderman}
        alt="Spiderman Movies"
        className='images'
        />
        <Card.Title className='text-center p-2 m-1'>Spiderman</Card.Title>
        <Card.Text className='text-left'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
    </Card>
    </Col>
    <Col md={4} className="movieWrapper" >
        <Card className="bg-dark text-white movieImage">
      <Image
        src={superman}
        alt="Superman Movies"
        className='images'
        />
        <Card.Title className='text-center p-2 m-1'>Superman</Card.Title>
        <Card.Text className='text-left'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
    </Card>
    </Col>
            </Row>
        </Container>
    )
}

export default SuperHero