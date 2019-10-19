import {Text} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';


class FontText extends Component {

    Loadtext(){
        if(this.props.fontLoaded){
            console.log(this.props.fontLoaded);
            console.log('fontloaded!');
            return <Text style={this.props.style}>{this.props.children}</Text>
        } else {
            return <Text>No fontLoaded!</Text>
        }
    }
    render() {
        return (
            this.Loadtext()
        )
    }
}

const mapStateToProps = (state) => {
    const {fontLoaded} = state.other;
    return {fontLoaded};
};

export default connect(mapStateToProps, {})(FontText);