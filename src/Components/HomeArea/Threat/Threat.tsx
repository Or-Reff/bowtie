import { useState } from "react";
import Blocker from "../Blocker/Blocker";
import Scene from "../Scene/Scene";
import "./Threat.css";

interface ThreatProps {
	
}

function Threat(props: ThreatProps): JSX.Element {
    const [scenes, setScenes] = useState<object[]>([]);

    function addScene(): void {
        console.log(scenes);

        setScenes([...scenes, Scene]);
    }

    function removeScene(index: number): void {
        console.log(index + " hifdf");
        
        console.log(scenes);
        
        const newScenes = scenes.filter((_, i) => i !== index);
        console.log(newScenes);
        
        setScenes(newScenes);
    }

    return (
        <div className="Threat">
			 <button className="customButton" onClick={addScene} id="threatBtn">S+</button>
             {scenes.map((scene, index) => <span key={index}><Scene index={index} removeFunc={removeScene} sceneTitle="הכנס איום" side={1} blockTitle={"הכנס מחסום מונע"}/></span>)}
        </div>
    );
}

export default Threat;
