import React, {Component} from 'react';
import Toilet from './Toilet/Toilet';

import Meetingrooms from '../../wc_map.png';


import './Overlay.css';

class Overlay extends Component {
    toilets = [
        {left: '125px', top: '400px', name: 'toilet1'},
        {left: '90px', top: '220px', name: 'toilet2'},
        {left: '150px', top: '220px', name: 'toilet3'},
        {left: '215px', top: '220px', name: 'toilet4'},
        {left: '275px', top: '220px', name: 'toilet5'},
        {left: '350px', top: '220px', name: 'toilet6'},
        {left: '410px', top: '220px', name: 'toilet7'},
        {left: '500px', top: '235px', name: 'toilet8'},
        {left: '500px', top: '325px', name: 'toilet9'},
        {left: '500px', top: '380px', name: 'toilet10'},
        {left: '275px', top: '400px', name: 'toilet11'},
        {left: '350px', top: '400px', name: 'toilet12'}
    ];

    render() {
        const allToilets = this.toilets.map(toilet => {
            return <Toilet key={toilet.name} {...toilet} />
        })

        return(
            <div className="overlay">
                {allToilets}
                <img className="mapImage" src={Meetingrooms} />
            </div>
        );
    }
}

export default Overlay