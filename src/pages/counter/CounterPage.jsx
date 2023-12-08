import { useDispatch, useSelector } from "react-redux"
import {
  increment,
  decrement
} from './actions'
import { getCounter } from "./selectors";
import { CounterWidget } from "../../components/CounterWidget/CounterWidget";


const CounterPage= () => {
  const counter = useSelector(getCounter);
  const dispatch = useDispatch()

  const handleIncrementBtnClick = () => {
    dispatch(increment())
  }

  const handleDecrementBtnClick = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <CounterWidget
      counter={counter}
      onIncrementBtnClick={handleIncrementBtnClick}
      onDecrementBtnClick={handleDecrementBtnClick} />
    </div>
)
  
}

export default CounterPage
