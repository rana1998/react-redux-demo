import React, {useState} from 'react'
import { connect } from 'react-redux';
import { buyBook } from '../redux';

function BookContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1>Number of Book - {props.numberOfBooks}</h1>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={() => props.buyBook(number)}>Buy book {number}</button>
        </div>
    )
}

const mapStatetoProps=(state)=>
{
    return{
        numberOfBooks:state.numberOfBooks
    }
}

const mapDispatchtoProps=(dispatch)=>
{
    return{
        buyBook:function(number){
            dispatch(buyBook(number));
        }
    }
}
export default  connect(mapStatetoProps,mapDispatchtoProps)(BookContainer);