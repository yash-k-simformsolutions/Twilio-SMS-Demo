import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
    return (
        <div className="cakeContainer">
            <h2>Cake Container: {props.cake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        cake: state.cake.cake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)
