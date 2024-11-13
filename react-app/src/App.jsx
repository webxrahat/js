import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    function getClick() {
        const increase = count + 1;
        return setCount(increase);
    }

    function minusValue() {
        const dicrease = count - 1;

        if (dicrease === -1) {
            return 0;
        } else return setCount(dicrease);
    }

    return (
        <>
            <div>this is react app</div>
            <p>Here is count: {count}</p>
            <button onClick={getClick}>+</button>
            <button onClick={minusValue}>-</button>
        </>
    );
}

export default App;
