import { useState } from 'react';
import { Idoc } from './../interfaces/interfaces';
import { getDocs } from './../api/docsAPI';

export const useSearch = () => {
    const [docsList, setDocsList] = useState<Idoc[] | undefined>([]);
    const [error, setError] = useState<string | undefined>('');

    const handlerApiRequest = (id: string, date: string, name: string) => {
        return getDocs(id, date, name)
            .then(data => {
                if (data.status === 200) {
                    setDocsList(() => data.data);
                    setError('');
                } else {
                    setError(data.error);
                }
            })
    }
    return {
        docsList,
        error,
        handlerApiRequest
    }
};
