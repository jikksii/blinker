import styles from './TerminalText.module.css'
import { useState,useEffect,useRef} from 'react';
import Cursor from './Cursor/Cursor';

const TerminalText = ({value : finalState,speed , width}) => {
    const [currentState,setCurrentState] = useState("");
    const [index,setIndex] = useState(0);

    const [isBlinking,setIsBlinking] = useState(false);
    const finalStateRef = useRef(finalState);
    const speedRef = useRef(speed);

    useEffect(() => {
        setCurrentState("")
        setIndex(0);
        setIsBlinking(false);
        finalStateRef.current = finalState;
    },[finalState]);


    useEffect(() => {
        setCurrentState("")
        setIndex(0);
        setIsBlinking(false);
        speedRef.current = speed;
    },[speed])

    
    useEffect(() => {
        if(currentState.length === finalState.length){
            setIsBlinking(true)
            return;
        }

        if(finalStateRef.current !== finalState){
            return;
        }

        if(speedRef.current !== speed){
            return;
        }
        const timeout = setTimeout(()=> {
            let nextValue = currentState + finalState.charAt(index);
            setCurrentState(nextValue);
            setIndex((prevState) => {
                return prevState + 1;
            });
        },speed)

        return () => clearTimeout(timeout)
    },[currentState,finalState,index,speed]);
    
    return (
        <div className={styles.TerminalText}>
            <span>{currentState}</span><Cursor shape="underline" isBlinking={isBlinking}/>
        </div>
    )
}

export default TerminalText;