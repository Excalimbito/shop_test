import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainApp extends Component {
  render()
  {
    return (
      <div>
        Cart
        <Link to="/">
          Go To MainApp
        </Link>
      </div>
    )
  }
}

export default MainApp