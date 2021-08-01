import {useSelector,useDispatch} from 'react-redux'
import {logTimeActions} from '../redux-store/logTimeReducer/actions'

export const TestComponent = () => {

const info = useSelector(state => state.reducer.testCount);
const dispatch = useDispatch();

    return(
        <div>
<button onClick={()=>dispatch(logTimeActions.testAction())}>+</button>
<hr></hr>
<p>{info}</p>
<hr></hr>
        </div>
    )
}