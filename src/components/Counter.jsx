import React from 'react'
import { useSelector, useDispatch
 } from 'react-redux'
 import { decrement, increment } from '../../redux/CounterSlice'
 import './Counter.css'

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div className='main'>
        <button onClick={() => dispatch(increment())}>Add 1</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Subtract 1</button>

    </div>
  )
}

export default Counter