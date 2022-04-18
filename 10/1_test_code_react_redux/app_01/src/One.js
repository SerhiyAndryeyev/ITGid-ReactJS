import oneSlice from './store/oneSlice';
import { useDispatch } from 'react-redux';


export default function One() {

    const actions = oneSlice.actions;
    const dispatch = useDispatch();

    function btnHandler(){
        dispatch(actions.abcd())
    }

    return (
        <div>
            <button onClick={btnHandler}>Button</button>
        </div>
    )
}