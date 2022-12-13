import { InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { title } from "process";
import React, { useState } from "react";
import Draggable from "react-draggable";
import CustomDD from "../customDD/customDD";
import "./Blocker.css";

interface BlockerProps {
    blockerTitle: string;
    index: number;
    removeFunc: Function;
}

function Blocker(props: BlockerProps): JSX.Element {


    let color1 = '' as string;
    let color2 = '' as string;

    const changeFirstColor = (colorToChange: string) => {
        color1 = colorToChange;
    }

    const changeSecondColor = (colorToChange: string) => {
        color2 = colorToChange;
    }

    const myRef = React.createRef<HTMLDivElement>();

    const handleChange = () => {
        console.log("here");

        //background-image: linear-gradient(0deg,);
        const node = myRef.current!;

        if (node) node.focus();
        node.style.backgroundImage = `linear-gradient(0deg,${color1},${color2}`;
    }

    function removeSelf(): void {
        console.log(props.index);

        props.removeFunc(props.index);
    }

    return (
        <div className="Blocker BlockerBox" ref={myRef}>
            <TextField className="sbgs" id="outlined-basic" label={props.blockerTitle} variant="outlined" />
            <br />
            <CustomDD ddTitle="יעילות" ddValues={["גבוהה", "בינונית", "נמוכה"]} colour={changeFirstColor} chageColor={handleChange} />
            <CustomDD ddTitle="מחיר" ddValues={["גבוה", "בינוני", "נמוך"]} colour={changeSecondColor} chageColor={handleChange} />
            <button onClick={removeSelf}>❌</button>
        </div>
    );
}

export default Blocker;
