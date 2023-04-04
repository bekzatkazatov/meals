import React, {useState} from "react";


const App = () => {
    const [counter,setCounter] = useState(0);
    const [firstInput, setFirstInput] = useState(0);
    const [secondInput, setSecondInput] = useState(0);


    const  handleIncrement =  () => {
        setCounter(firstInput + secondInput)
    }
    const  handleDecrement = () => {
        setCounter(firstInput - secondInput)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <input type="text" value={firstInput} onChange={(e) => setFirstInput(Number(e.target.value))}/>
            <input type="text" value={secondInput} onChange={(e) => setSecondInput(Number(e.target.value))}/>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

export default App;
