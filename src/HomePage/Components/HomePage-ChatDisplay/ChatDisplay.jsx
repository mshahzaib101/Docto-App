import React, { Component } from 'react';
import './ChatDisplay.css';
import image1 from '../../../Images/mobile.png';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    button: {
      color: '#ffffff',
      borderColor: '#ffffff',
      fontSize: 25,
      padding: '14px',
      border: '2px solid',
      'margin-top': '20px',
      '&:hover': {
        backgroundColor: '#3b5d63',
     
      },
    },
  });

class ChatDisplay extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="ChatDisplayContainer">
        
        <div className="child1">
        <h1>No More Wait
        Lets Chat with a doctor</h1>
      
        <h2>Find best solution for your Health
        Take appointment
        End-to-end encryption
        Starting Fee at just Rs 199</h2>
        <Button variant="outlined" className={classes.button}>
        Chat Now
        </Button>
        </div>
        <div className="child2">
        <img src={image1} alt="Chat View" className='responsive-img' />
        </div>
         
      </div>
    );
  }
}


ChatDisplay.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  


export default withStyles(styles)(ChatDisplay);
