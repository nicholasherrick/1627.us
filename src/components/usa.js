import React from 'react';

class Usa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'New York',
      link: 'https//whatsnextonyourlist.com',
      display: false,
    };
  }

  render() {
    return (
      <div>
        <p>Locaton</p>
        <a>Link</a>
      </div>
    );
  }
}

export default Usa;
