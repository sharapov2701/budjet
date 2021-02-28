import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { decrement, increment } from '../app/slices/counterSlice'

const Counter = () => {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
      <div>
          {count}
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
      </div>
  )
}

export default Counter