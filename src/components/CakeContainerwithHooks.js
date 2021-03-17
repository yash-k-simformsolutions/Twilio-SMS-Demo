import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux';

function CakeContainerwithHooks() {
    const selector = useSelector(state => state.cake.cake)
    const dispatch = useDispatch(); 
    return (
        <div className="cakeContainerwithHooks">
            <h2>Number of Cakes: {selector}</h2>
            <button onClick={() => {dispatch(buyCake())}} >Buy Cake</button>
        </div>
    )
}

export default CakeContainerwithHooks
