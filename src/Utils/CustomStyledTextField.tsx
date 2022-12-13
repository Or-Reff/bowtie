import { styled, TextField } from "@mui/material";
import Draggable from "react-draggable";
import { idText } from "typescript";

type InputProps = {
    classNameText?: string, idText?: string, labelText?: string, nameText?: string, variantText?:"standard"|"outlined"|"filled";
};

const StyledTextField = styled(TextField)({
    "& .MuiInputLabel-root": {
        right: 30,
        textAlign: "center"
    },
    "& .MuiInputLabel-shrink": {
        margin: "0 auto",
        position: "absolute",
        right: "0",
        left: "0",
        top: "-3px",
        width: "150px", // Need to give it a width so the positioning will work
        background: "white" // Add a white background as below we remove the legend that had the background so text is not meshing with the border
        // display: "none" //if you want to hide it completly
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& legend ": {
            display: "none"
        }
    }
});

/**Creates a new styled text aligned TextField
 * @param classNameText string @param labelText string @param nameText string
*/
function CustomStyledTextField({ classNameText, idText, labelText, nameText, variantText }: InputProps) {
    return (
            <StyledTextField
                InputProps={{
                    inputProps: {
                        style: { textAlign: "center", borderRadius: "20px" }
                    }
                }}
                margin="normal"
                className={classNameText}
                id={idText}
                label={labelText}
                name={nameText}
                variant={variantText}
                autoFocus
            />
    );
}


export default CustomStyledTextField;