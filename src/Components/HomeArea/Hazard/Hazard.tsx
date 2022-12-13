import { TextField } from "@mui/material";
import Draggable from "react-draggable";
import "./Hazard.css";

function Hazard(): JSX.Element {
    return (
        <Draggable>

            <div className="Hazard Box">
                <TextField id="outlined-basic" label="מפגע" variant="outlined" />
            </div>
        </Draggable>
    );
}

export default Hazard;
