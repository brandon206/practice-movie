import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPopularGamesData } from '../actions';

class PopularGamesData extends Component {
    componentDidMount () {
        this.props.getPopularGamesData();
    }

    render() {
        return(
            <div>
                <h1 className="center">Popular Games</h1>
                {/* <p>I'll be there</p> */}
            </div>
        );
    }
}

export default connect(null, {
    getPopularGamesData: getPopularGamesData
})(PopularGamesData);