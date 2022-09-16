import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import b1 from './../Images/banner/b1.jpg';
import b2 from './../Images/banner/b2.jpg';
import b3 from './../Images/banner/b3.jpg';

const Banner = () => {
    return (
        <div>
                <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>One Place For All</h5>
          <p>Introduce your addorable pet to the world. 
          <Link to='/register'>
                <button type="button" class="ml-4 w-30 btn btn-success btn-rounded">Join Us</button>
            </Link>
         </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;