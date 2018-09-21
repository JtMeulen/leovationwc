import React from 'react';
import { IconContext } from 'react-icons';

import './Toilet.css';

class Toilet extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <IconContext.Provider value={{ color: "green", className: "far fa-smile-wink" }}>
        <div className="toilet" style={{"left": `${this.props.left}`, "top": `${this.props.top}`}}>
          {/* <FaFolder /> */}
        </div>
      </IconContext.Provider>
    );
  }
}

export default Toilet;