import React from 'react';
import SearchForm from './Search-form/SearchForm';
import SearchResult from './Search-result/SearchResult';
import { useSearch } from '../../hooks/useSearch';
import './search-page.scss';
import { IsortParam } from '../../interfaces/interfaces';
import { useSort } from '../../hooks/useSort';
import { sortHelper } from '../../helpers/sortHelper';

const SearchPage: React.FC = () => {
    const search = useSearch();
    const sortParam: IsortParam = useSort();

    return (
        <>
            <div className="search-page">
                <div className="search-page__header">
                    Поиск документов
                </div>
                <div className="search-page__body">
                    <SearchForm
                        sortParams={{
                            sortField: sortParam.sortField,
                            sortType: sortParam.sortType,
                            handleSortField: sortParam.handleSortField,
                            handleSortType: sortParam.handleSortType
                        }
                        }
                        handlerApiRequest={search.handlerApiRequest} />
                </div>
            </div>
            <div className="search-page__result">
                {search.docsList &&
                    <SearchResult
                        docsList={sortHelper(search.docsList, sortParam.sortField, sortParam.sortType)}
                        error={search.error} />
                }
            </div>
        </>
    );
};

export default SearchPage;