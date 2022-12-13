import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import "./customDD.css";

interface CustomDDProps {
    ddTitle: string;
    ddValues: string[];
    colour: Function;
    chageColor: Function;
}

function CustomDD(props: CustomDDProps): JSX.Element {
    const myRef = React.createRef<HTMLDivElement>();

    const [dropDownValue, setDropDownValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setDropDownValue(event.target.value);

        //const customDDDiv = document.querySelector('#s') as HTMLElement | null;
        //console.log(customDDDiv);

        const colors = [
            '#F2BABA',
            '#DCDDAE',
            '#B7D0A3',
        ];

        //console.log(event.target.value + "hi");

        const node = myRef.current!;

        if (node) node.focus();

        node.style.backgroundColor = `${colors[event.target.value as unknown as number]}`;
        props.colour(`${colors[event.target.value as unknown as number]}`);
        console.log(props.colour);

        //props.color = `${colors[event.target.value as unknown as number]}`;
        props.chageColor();
        //if (customDDDiv != null) customDDDiv.style.backgroundColor = `${colors[event.target.value as unknown as number]}`;

    };

    return (
        <div className="customDD" id="s" ref={myRef}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-standard-label">{props.ddTitle}</InputLabel>

                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={dropDownValue}
                    onChange={handleChange}
                    label="customDD"
                >
                    <MenuItem value="">
                        <em>ללא</em>
                    </MenuItem>
                    {props.ddValues.map((ddValue, index) => <MenuItem key={index} value={index}>{ddValue}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}

export default CustomDD;
