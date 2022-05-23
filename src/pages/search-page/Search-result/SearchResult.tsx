import React, { useEffect, useState } from 'react';
import { IdocsList } from '../../../interfaces/interfaces';
import Alert from '@mui/material/Alert';
import './search-result.scss';
import DocCard from './DocCard';

const SearchResult: React.FC<IdocsList> = ({ docsList, error }) => {
    const [errorMessage, setErrorMessage] = useState<any>('');
    useEffect(() => {
        setErrorMessage(error)
    }, [error])
    return (
        <div className="search-result">
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            {docsList?.map(doc =>
                <DocCard
                    key={doc.id}
                    id={doc.id}
                    name={doc.name}
                    date={doc.date}
                    info={doc.info} />)}
        </div>
    );
};

export default SearchResult;