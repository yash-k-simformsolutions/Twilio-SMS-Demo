import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div className="cakeContainer">
            <h2>Cake Container: {props.cake}</h2>
            <input type="text" value={number} onChange={(e) => {setNumber(e.target.value)}} />
            <button onClick={() => {props.buyCake(number)}}>Buy {number} Cake</button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)
