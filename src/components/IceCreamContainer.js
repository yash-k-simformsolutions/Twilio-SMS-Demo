import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
    return (
        <div className="cakeContainer">
            <h2>Cake Container: {props.iceCream}</h2>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        iceCream: state.iceCream.iceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)
