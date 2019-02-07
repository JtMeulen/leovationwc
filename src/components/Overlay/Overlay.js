import React, {Component} from 'react';
import Toilet from './Toilet/Toilet';

import axios from 'axios';

import Meetingrooms from '../../wc_map.png';


import './Overlay.css';

class Overlay extends Component {
    state = {
        toilet0: 0,
        toilet1: 0,
        toilet2: 0,
        toilet3: 0,
        toilet4: 0,
        toilet5: 0,
        toilet6: 0,
        toilet7: 0,
        toilet8: 0,
        toilet9: 0,
        toilet10: 0,
        toilet11: 0,
        toilet12: 0,
        toilet13: 0,
        toilet14: 0
    };

    // componentWillMount() {
    //     axios.get('https://leovationwc.firebaseio.com/toilets.json')
    //         .then(res => {
    //             this.setState({
    //                 toilet0: this.getData(res.data, 0),
    //                 toilet1: this.getData(res.data, 1),
    //                 toilet2: this.getData(res.data, 2),
    //                 toilet3: this.getData(res.data, 3),
    //                 toilet4: this.getData(res.data, 4),
    //                 toilet5: this.getData(res.data, 5),
    //                 toilet6: this.getData(res.data, 6),
    //                 toilet7: this.getData(res.data, 7),
    //                 toilet8: this.getData(res.data, 8),
    //                 toilet9: this.getData(res.data, 9),
    //                 toilet10: this.getData(res.data, 10),
    //                 toilet11: this.getData(res.data, 11)
    //             })
    //         });
    // }

    // componentDidMount() {
    //     setInterval(() => {
    //         axios.get('https://leovationwc.firebaseio.com/toilets.json')
    //         .then(res => {
    //             this.setState({
    //                 toilet0: this.getData(res.data, 0),
    //                 toilet1: this.getData(res.data, 1),
    //                 toilet2: this.getData(res.data, 2),
    //                 toilet3: this.getData(res.data, 3),
    //                 toilet4: this.getData(res.data, 4),
    //                 toilet5: this.getData(res.data, 5),
    //                 toilet6: this.getData(res.data, 6),
    //                 toilet7: this.getData(res.data, 7),
    //                 toilet8: this.getData(res.data, 8),
    //                 toilet9: this.getData(res.data, 9),
    //                 toilet10: this.getData(res.data, 10),
    //                 toilet11: this.getData(res.data, 11)
    //             })
    //         });
    //     }, 1000);
    // }

    // componentDidUpdate() {
    //     this.setState({
    //         toilets: this.props.state
    //     });
    // }

    getData = (data, idx) => {
        return Object.keys(data[idx]).map(i => data[idx][i])[Object.keys(data[idx]).map(i => data[idx][i]).length - 1].status
    }

    toilets = [
        {left: '15.62%', top: '50.00%', name: 'toilet0'},
        {left: '10.62%', top: '28.13%', name: 'toilet1'},
        {left: '18.13%', top: '28.13%', name: 'toilet2'},
        {left: '26.25%', top: '28.13%', name: 'toilet3'},
        {left: '33.75%', top: '28.13%', name: 'toilet4'},
        {left: '43.13%', top: '28.13%', name: 'toilet5'},
        {left: '51.25%', top: '28.13%', name: 'toilet6'},
        {left: '61.88%', top: '28.75%', name: 'toilet7'},
        {left: '62.50%', top: '40.63%', name: 'toilet8'},
        {left: '62.50%', top: '47.50%', name: 'toilet9'},
        {left: '32.50%', top: '49.38%', name: 'toilet10'},
        {left: '44.63%', top: '49.38%', name: 'toilet11'},
        {left: '42.00%', top: '17.00%', name: 'toilet12'},
        {left: '78.00%', top: '25.00%', name: 'toilet13'},
        {left: '78.00%', top: '32.00%', name: 'toilet14'}
    ];

    render() {
        const allToilets = this.toilets.map(toilet => {
            const toiletName = toilet.name;
            return <Toilet key={toilet.name} {...toilet} status={this.props.state[toiletName]}/>
        })

        return(
            <div className="overlay">
                {allToilets}
                <img className="mapImage" src={Meetingrooms} />
                <div className="coffeeWorking">Coffee 1: Working</div>
                <div className="coffeeWorking">Coffee 2: Working</div>
                <div className="coffeeBroken">Coffee 3: Broken</div>
            </div>
        );
    }
}

export default Overlay