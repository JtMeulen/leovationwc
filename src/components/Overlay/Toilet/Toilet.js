import React from 'react';
import './Toilet.css';

import { IconContext } from 'react-icons';
import { FaSmile, FaMeh, FaScrewdriver } from 'react-icons/fa';

class Toilet extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <IconContext.Provider value = {{ className: "freetoilet"}}>
        <div className="toilet" style={{"left": `${this.props.left}`, "top": `${this.props.top}`}}>
          <FaSmile />
          <FaMeh />
          <FaScrewdriver />
        </div>
      </IconContext.Provider>
    );
  }
}

export default Toilet;