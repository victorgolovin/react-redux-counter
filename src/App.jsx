import { useDispatch, useSelector } from "react-redux"

const getCounterSelector = state => state.value;

const App = () => {
  const counter = useSelector(getCounterSelector);
  const dispatch = useDispatch()

  const handleIncrementBtnClick = () => {
    dispatch({
      type: 'counter/increment'
    })
  }

  const handleDecrementBtnClick = () => {
    dispatch({
      type: 'counter/decrement'
    })
  }

  return (
      <div>
        <p>{counter}</p>
        <button onClick={handleIncrementBtnClick}>+1</button>
        <button onClick={handleDecrementBtnClick}>-1</button>
      </div>
  )
}

export default App
