import { useSelector } from "react-redux";

export default function Two() {
    // получаем данные из store
    let d = useSelector(state => {
        console.log(state);
        // state.имя_slice
        return state.one;
    });

    return (
        <div>
        <h2>Two</h2>
        <div>{d}</div>
        </div>
    );
}