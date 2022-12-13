import { TextField } from "@mui/material";
import CustomDD from "../customDD/customDD";
import "./Scene.css";
import Draggable from 'react-draggable';
import Xarrow, { useXarrow } from "react-xarrows";
import { ChangeEvent, useRef, useState } from "react";
import React from "react";
import Blocker from "../Blocker/Blocker";
import LineTo, { SteppedLineTo } from "react-lineto";


interface SceneProps {
    blockTitle: string;
    sceneTitle: string;
    side: number;
    index: number;
    removeFunc: Function;
}

function Scene(props: SceneProps): JSX.Element {
    const [blocker, setBlockers] = useState<object[]>([]);

    function addBlocker(): void {
        console.log(blocker);

        setBlockers([...blocker, Blocker]);
    }

    const myRef = React.createRef<HTMLDivElement>();

    function removeSelf(): void {
        console.log(props.index);

        props.removeFunc(props.index);
    }

    const box1Ref = useRef(null);

    let color1 = '' as string;
    let color2 = '' as string;

    const changeFirstColor = (colorToChange: string) => {
        color1 = colorToChange;
    }

    const changeSecondColor = (colorToChange: string) => {
        color2 = colorToChange;
    }


    const handleChange = () => {
        //background-image: linear-gradient(0deg,);
        console.log("herere");

        const node = myRef.current!;

        if (node) node.focus();
        node.style.backgroundImage = `linear-gradient(0deg,${color1},${color2}`;
    }

    function removeBlock(index: number): void {
        console.log(index + " hifdf");

        console.log(blocker);

        const newBlocker = blocker.filter((_, i) => i !== index);
        console.log(newBlocker);

        setBlockers(newBlocker);
    }

    return (
        <Draggable>
            <div className="Scene" >
                {props.side === 1 && blocker.map((blocker, index) => <span key={index}><Blocker blockerTitle={props.blockTitle} index={0} removeFunc={removeBlock} /></span>)}
                <div className="SceneBox" ref={myRef}>

                    <button className="Remove" onClick={removeSelf}>❌</button>
                    <TextField className="sbg" id="outlined-basic" label={props.sceneTitle} variant="outlined" />
                    <br />
                    <CustomDD ddTitle="סבירות" ddValues={["גבוהה", "בינונית", "נמוכה"]} colour={changeFirstColor} chageColor={handleChange} />
                    <CustomDD ddTitle="חומרה" ddValues={["חמור", "בינוני", "קל"]} colour={changeSecondColor} chageColor={handleChange} />
                    
                    <button className="Add" onClick={addBlocker}>+</button>
                </div>
                {props.side === 2 && blocker.map((blocker, index) => <span key={index}><Blocker blockerTitle={props.blockTitle} index={0} removeFunc={removeBlock} /></span>)}
            </div>
        </Draggable>
    );
}

export default Scene;
