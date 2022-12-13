import { Box, styled, TextField } from "@mui/material";
import Draggable from "react-draggable";
import CustomStyledTextField from "../../../Utils/CustomStyledTextField";
import "./Hazard.css";




function Hazard(): JSX.Element {
    return (
        <Draggable>
            <Box>
                <CustomStyledTextField classNameText="Box Hazard" labelText="מפגע" nameText="hazard" />
            </Box>
        </Draggable>
    );
}

export default Hazard;
