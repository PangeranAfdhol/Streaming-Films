import { Card, Container, Col, Row, Image } from 'react-bootstrap';
import duneImage from '../assets/images/trending/dune.jpg';
import everything from '../assets/images/trending/everything.jpg';
import infinite from '../assets/images/trending/infinite.jpg';
import joker from '../assets/images/trending/joker.jpg';
import lightyear from '../assets/images/trending/lightyear.jpg';
import morbius from '../assets/images/trending/morbius.jpg';

const Trending =() => {
    return (
    <Container>
        <br />
        <h1 className='text-white'>Trending Movies</h1>
        <br />
     <Row>
        <Col md={4} className="movieWrapper" id='trending' >
        <Card className="bg-dark text-white movieImage">
      <Image
        src={duneImage}
        alt="Dune Movies"
        className='images'
        />
        <Card.Title className='text-center p-2 m-1'>Dune</Card.Title>
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
        src={everything}
        alt="Everything Movies"
        className='images'
        />
        <Card.Title className='text-center p-2 m-1'>Everything</Card.Title>
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
        src={infinite}
        alt="Infinite Movies"
        className='images'
        />
        <Card.Title className='text-center p-2 m-1'>Infinite</Card.Title>
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
        src={joker}
        alt="Joker Movies"
        className='images'
        />
        <Card.Title className='text-center p-2 m-1'>Joker</Card.Title>
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
        src={lightyear}
        alt="Lightyear Movies"
        className='images'
        />
        <Card.Title className='text-center p-2 m-1'>Lightyear</Card.Title>
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
        src={morbius}
        alt="Morbius Movies"
        className='images'
        />
        <Card.Title className='text-center p-2 m-1'>Morbius</Card.Title>
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

export default Trending