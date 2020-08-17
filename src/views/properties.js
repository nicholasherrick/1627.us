import React from 'react';
import { Link } from 'react-router-dom';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Winston Salem, North Carolina',
      link:
        'https://www.realtor.com/realestateandhomes-detail/4455-Brassfield-Dr-Unit-209_Winston-Salem_NC_27105_M64092-00920#photo1',
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
                <div>
                  <p>{this.state.location}</p>
                  <a href={this.state.link}>{this.state.link}</a>
                </div>
              ) : null}
            </div>
          </div>
          <div className='links'>
            <Link to='/shop'>shop</Link>
            <Link to='/properties'>properties</Link>
            <Link to='/contact'>contact</Link>
            <Link to='/sponsorships'>sponsorships</Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Properties;
