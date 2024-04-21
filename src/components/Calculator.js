import { useState } from "react";
import "./Calculator.css";
import Button from "./Button";

const Calculator = () => {
    const [weight, setWeight] = useState("");
    const [result, setResult] = useState("");

    const handleChangeWeight = (event) => {
        setWeight(event.target.value);
    };

    const calculateORM = () => {
        const orm = parseInt(weight) * 1.31;
        setResult(orm.toFixed(2));
    };

    return (
        <div className="Calculator">
            <input
                type="text"
                placeholder="정확히 10회가 가능한 무게를 작성해주세요."
                value={weight}
                onChange={handleChangeWeight}
            />
            <button text="계산하기" onClick={calculateORM}>
                Calculate
            </button>
            <span className="result">
                {result ? <p>{result}kg</p> : <p>원알엠</p>}
            </span>
        </div>
    );
};

export default Calculator;
