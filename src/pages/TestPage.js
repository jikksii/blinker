import { useRef, useState } from "react";
import TerminalText from "../components/TerminalText/TerminalText";



const DEFAULT_SPEED = 250;
const DEFAULT_TEXT = "change is inevitable"

const TestPage = () => {

    const [value, setValue] = useState(DEFAULT_TEXT);
    const [inputValue, setInputValue] = useState("");


    const [speed,setSpeed] = useState(DEFAULT_SPEED);
    const speedInputRef = useRef(null);

    const handleTestText = (event) => {
        setValue(() => inputValue)
    }

    const handleSearch = (event) => {
        setInputValue(() => event.target.value)
    }

    const handleTestSpeed = () => {
        const speed = parseInt(speedInputRef.current.value);

        if(speed){
            setSpeed(() => speed);
        }
    }


    const style = {
        width: "1000px",
        height: "500px",
        display: "flex",
        padding: "20px"
    };
    return (
        <div style={style}>
            <div style={{ width: "50%", display: "flex", alignItems: "center" }}>
                <TerminalText value={value} speed={speed} />

            </div>
            <div>
                <div>
                    <input defaultValue={DEFAULT_TEXT} onChange={handleSearch} style={{ padding: "10px", margin: "10px" }}></input>
                    <button onClick={handleTestText} style={{ padding: "10px", margin: "10px" }}>Test text</button>
                </div>
                <div>
                    <input defaultValue={DEFAULT_SPEED}  ref={speedInputRef} placeholder="ms" type={"number"} style={{ padding: "10px", margin: "10px" }}></input>
                    <button  onClick={handleTestSpeed} style={{ padding: "10px", margin: "10px" }}>Test speed</button>
                </div>

            </div>
        </div>
    )
}

export default TestPage;