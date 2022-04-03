import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ValueContextForForm } from '../constants/constants';

export default function ControlledRadioButtonsGroup({ label, type }: {
    label: string[],
    type: string

}) {
    const { setValueOfQuestion } = React.useContext(ValueContextForForm)
    const { setStateofForm } = React.useContext(ValueContextForForm)
    const { setStateofForm2 } = React.useContext(ValueContextForForm)
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);

        if (type === 'first') {
            setStateofForm(true)
            setValueOfQuestion((event.target as HTMLInputElement).value)
        }
        if (type === 'second') {
            setStateofForm2(true)
        }
    };
    return (
        <FormControl>
            <FormLabel id="controlled-radio-buttons-group" ></FormLabel>
            <RadioGroup
                aria-labelledby="controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}

            >
                {label.map((l, index) =>
                    <FormControlLabel style={{ fontFamily: 'Poppins', fontSize: '10px' }} key={index} value={l} control={<Radio />} label={l} />
                )}
            </RadioGroup>
        </FormControl>
    );
}
