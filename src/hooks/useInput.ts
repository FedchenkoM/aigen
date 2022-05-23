import { useState, BaseSyntheticEvent } from 'react';
import { IuseInput } from '../interfaces/interfaces';

export const useInput = (initialState: string): IuseInput => {
    const [value, setValue] = useState(initialState);
    const [isDirty, setIsDirty] = useState(false);

    const onChange = (e: BaseSyntheticEvent) => {
        setIsDirty(true);
        setValue(() => e.target.value);
    }
    return {
        value,
        onChange,
        isDirty
    }
}