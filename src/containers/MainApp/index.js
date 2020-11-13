import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainApp extends Component {
  render()
  {
    return (
      <div>
        Main App Screen
        <Link to="/cart">
          Go To Cart
        </Link>
      </div>
    )
  }
}

export default MainApp