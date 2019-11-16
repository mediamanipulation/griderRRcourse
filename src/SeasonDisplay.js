import React from "react";
import { Icon } from 'semantic-ui-react'

const getSeason = (lat, month) => {
    if (month > 2 && month < 9 ) {
        return  lat > 0 ? 'summer' : 'winter';
    } else {
        return  lat > 0 ? 'winter' : 'summer';
    }
};
const IconExampleLoadingGroup = () => (
    <div>
      <Icon.Group size='huge'>
        <Icon size='big' color='red' name='dont' />
        <Icon color='black' name='user' />
      </Icon.Group>
      <Icon.Group size='huge'>
        <Icon loading size='big' name='circle notch' />
        <Icon name='user' />
      </Icon.Group>
    </div>
  )
  
const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth() );
    const text = season === "winter" ? "ooohh wwweee it's cold." : "ooohh weee it's hot"
    return (
    <div>
        {text}
        <i class="huge icons">
    <i aria-hidden="true" class="red dont big icon"></i>
    <i aria-hidden="true" class="black user icon"></i>
  </i>
  <i class="huge icons">
    <i aria-hidden="true" class="circle notch big loading icon"></i>
    <i aria-hidden="true" class="user icon"></i>
  </i>
    </div>
    );
};

export default SeasonDisplay;
