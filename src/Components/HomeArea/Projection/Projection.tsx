import { useState } from "react";
import Scene from "../Scene/Scene";
import "./Projection.css";

interface ProjectionProps {
	
}

function Projection(props: ProjectionProps): JSX.Element {
    const [scenes, setScenes] = useState<object[]>([]);

    function addScene(): void {
        console.log(scenes);

        setScenes([...scenes, Scene]);
    }

    function removeScene(index: number): void {
        const newScenes = scenes.filter((_, i) => i !== index);
        setScenes(newScenes);
    }

    return (
        <div className="Projection">
			 <button className="customButton" onClick={addScene}>S+</button>
             {scenes.map((scene, index) => <span key={index}><Scene index={index} removeFunc={removeScene} sceneTitle="הכנס השלכה" side={2} blockTitle={"הכנס מחסום משקם"}/></span>)}
        </div>
    );
}

export default Projection;
