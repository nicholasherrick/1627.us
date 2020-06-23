import React from 'react';
import { Link } from 'react-router-dom';

class Stockists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'New York',
      link: 'https://whatsnextonyourlist.com/',
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
              <a onClick={this.handleClick}>USA</a>
            </div>
            <div className='locations-info'>
              {this.state.showComponent ? (
                <div>
                  <p>{this.state.location}</p>
                  <a href={this.state.link}>{this.state.link}</a>
                </div>
              ) : null}
            </div>
          </div>
          <div className='bottom-text'>
            <Link to='/'>
              <h1>1627</h1>
            </Link>
            <div className='links'>
              <Link to='/stockists'>stockists</Link>
              <Link to='/properties'>properties</Link>
              <Link to='/contact'>contact</Link>
              <Link to='/sponsorships'>sponsorships</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Stockists;
