import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/img/house/images.json';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Winston Salem, North Carolina',
      address: '4455 Brassfield Drive Wiinston Salem, NC',
      info: '2BED/2BATH SQ1120',
      showComponent: false,
    };
  }

  handleClick = () => {
    this.setState({
      showComponent: true,
    });
  };

  render() {
    return (
      <div className='main-page'>
        <section className='stockists-content'>
          <div className='stockists-info'>
            <div className='locations'>
              <a onClick={this.handleClick}>North Carolina</a>
            </div>
            <div className='locations-info'>
              {this.state.showComponent ? (
                <div className='address'>
                  <p>{this.state.location}</p>
                  <p>{this.state.address}</p>
                  <p>{this.state.info}</p>
                  <Carousel>
                    {images.map((image, i) => (
                      <Paper key={i}>
                        <img className='carousel-img' src={image.img} alt='' />
                      </Paper>
                    ))}
                  </Carousel>
                </div>
              ) : null}
              {this.state.showImgComponent ? (
                <div>
                  <img src={this.clickedImage} alt='' className='large' />
                </div>
              ) : null}
            </div>
          </div>
          <div className='links'>
            <a href='https://1627.store/'>shop</a>
            <Link to='/contact'>contact</Link>
            <Link to='/sponsorships'>sponsorships</Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Properties;
