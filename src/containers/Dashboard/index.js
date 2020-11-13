import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

class MainApp extends Component {
  render()
  {
    return (
      <Grid container spacing={2}>
        <Grid item>
          Dashboard
        </Grid>
        <Grid item>
          <Link to="/cart">
            Go To Cart
          </Link>
        </Grid>
      </Grid>
    )
  }
}

export default MainApp