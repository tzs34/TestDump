import React from 'react';
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';

class WeekTimeline extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date: 0,
    }
  }

 handleChange = (event, value ) => {
   this.props.update(value)
    this.setState(
      {date: value})
  }
  
 valuetext = (value) => `${value}`;
  
  render(){
    return (
    <Slider 
      defaultValue={this.props.promotionDates.length - 1} 
      min={0} 
      max={this.props.promotionDates.length - 1} 
      getAriaValueText={this.valuetext} 
      step={null} 
      marks={this.props.promotionDates} 
      onChangeCommitted={this.handleChange}
      />
    )
  }
}

WeekTimeline.propTypes = {
  promotionDates: PropTypes.array,
  update: PropTypes.func, 
  date: PropTypes.number
}

export default WeekTimeline;
