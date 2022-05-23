import React, { BaseSyntheticEvent } from 'react';
import { formValidationHelper } from '../../../helpers/formValidationHelper';
import { useInput } from '../../../hooks/useInput';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { IsearchProps, IuseInput } from '../../../interfaces/interfaces';
import './search-form.scss';
import InputLabel from '@mui/material/InputLabel';


const SearchForm: React.FC<IsearchProps> = ({ handlerApiRequest, sortParams }) => {
    const id: IuseInput = useInput('');
    const date: IuseInput = useInput('');
    const name: IuseInput = useInput('');

    const valid = formValidationHelper([id.value, date.value, name.value]);

    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        handlerApiRequest(id.value, date.value, name.value.toLowerCase());
    }
    return (
        <form
            className="search-form"
            onSubmit={handleSubmit} >
            <TextField
                onChange={(e) => id.onChange(e)}
                value={id.value}
                type="number"
                inputProps={{ min: 1 }}
                id="outlined-basic"
                label="id документа"
                variant="outlined"
                error={!id.value.length && valid && id.isDirty} />
            <TextField
                onChange={(e) => date.onChange(e)}
                value={date.value}
                type="date"
                id="outlined-basic"
                variant="outlined"
                error={!date.value.length && valid && date.isDirty} />
            <TextField
                onChange={(e) => name.onChange(e)}
                value={name.value}
                type="text"
                inputProps={{ maxLength: 25 }}
                id="outlined-basic"
                label="Название документа"
                variant="outlined"
                error={!name.value.length && valid && name.isDirty} />
            {valid && <Alert className="form-alert" severity="info">Заполните хотя бы один параметр</Alert>}
            <InputLabel id="demo-simple-select-standard-label">Сортировать по</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={sortParams.sortField}
                onChange={(e) => sortParams.handleSortField(e)}>
                <MenuItem value="name">Названию</MenuItem>
                <MenuItem value="date">Дате</MenuItem>
            </Select>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={sortParams.sortType}
                onChange={(e) => sortParams.handleSortType(e)}>
                <MenuItem value="asc">Возрастанию</MenuItem>
                <MenuItem value="desc">Убыванию</MenuItem>
            </Select>
            <Button disabled={valid}
                variant="contained"
                type="submit">Поиск</Button>
        </form>
    );
};

export default SearchForm;