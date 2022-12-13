import { Key } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useState } from "react";
import Draggable from "react-draggable";
import Scene from "../Scene/Scene";
import "./Event.css";

function Event(): JSX.Element {

    const [scenes, setScenes] = useState<object[]>([]);

    function addScene(): void {
        console.log(scenes);

        setScenes([...scenes, Scene]);
    }

    function removeScene(indexs: number): void {
        console.log(indexs + "ime here");

        //const newScenes = scenes.filter((_, i) => i !== indexs);
        //setScenes(newScenes);
    }

    function decoy() {

    }

    return (
       
            <div className="Event newBox">
                <TextField className="top" id="outlined-basic" label="מאורע" variant="standard" />
            </div>
       
    );
}

export default Event;
