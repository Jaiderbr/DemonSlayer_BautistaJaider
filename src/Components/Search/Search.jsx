import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from "react-router-dom";

const ComboBox = ({ characters, onSelect }) => {
    const navigate = useNavigate();

    return (
        <Autocomplete
            disablePortal
            options={characters}
            getOptionLabel={(option) => option.name}
            sx={{
                width: 300,
                backgroundColor: "#1e1e1e",
                color: "#fff",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                '& .MuiInputBase-root': {
                    color: "#fff",
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: "#ff1744",
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: "#ff4569",
                },
                '& .MuiInputLabel-root': {
                    color: "#fff",
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: "#ff1744",
                },
                '& .MuiSvgIcon-root': {
                    color: '#fff',
                },
                transition: "all 0.3s ease",

            }}
            onChange={(event, value) => {
                if (value) {
                    navigate(`/character/${value.id}`);
                }
                onSelect && onSelect(value);
            }}
            renderInput={(params) => <TextField {...params} label="Search" />}
        />
    );
}

export default ComboBox;
