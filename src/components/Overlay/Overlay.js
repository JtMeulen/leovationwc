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
        toilet11: 0
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
        {left: '125px', top: '400px', name: 'toilet0'},
        {left: '85px', top: '225px', name: 'toilet1'},
        {left: '145px', top: '225px', name: 'toilet2'},
        {left: '210px', top: '225px', name: 'toilet3'},
        {left: '270px', top: '225px', name: 'toilet4'},
        {left: '345px', top: '225px', name: 'toilet5'},
        {left: '410px', top: '225px', name: 'toilet6'},
        {left: '495px', top: '230px', name: 'toilet7'},
        {left: '500px', top: '325px', name: 'toilet8'},
        {left: '500px', top: '380px', name: 'toilet9'},
        {left: '260px', top: '395px', name: 'toilet10'},
        {left: '357px', top: '395px', name: 'toilet11'}
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
            </div>
        );
    }
}

export default Overlay