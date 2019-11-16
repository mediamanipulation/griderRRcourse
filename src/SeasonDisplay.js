import React from "react";
const seasonConfig = {
    summer: {
        text: 'ooohh weee it\'s hot',
        iconName: 'sun'
    },
    winter:{
        text: 'ooohh wwweee it\'s cold.',
        iconName: 'snowflake'
    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9 ) {
        return  lat > 0 ? 'summer' : 'winter';
    } else {
        return  lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth() );
    const { text, iconName } = seasonConfig[season]
  
    return (
      <div>
        <i className={ `${iconName} icon massive` }></i>
        <h1>{text}</h1>
        <i className={ `${iconName} icon massive` }></i>
      </div>
    );
};

export default SeasonDisplay;
