import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilters, setFilterType } from '../redux/actions/filter';
import { getFilterState } from '../redux/reducers/filterReducer';

export const FilterList: React.FC = () => {

    const { filters } = useSelector(getFilterState)
    const dispatch = useDispatch();
    const [active, setActive] = React.useState<null | string>(null);

    const setFilterTypeHendler = React.useCallback((type: string | null) => {
        dispatch(setFilterType(type));
        setActive(type);
    }, [])

    React.useEffect(() => {
        dispatch(fetchFilters());
    }, []);


    return (
        <div className="container">
            <div className="filter-list">
                {filters.length === 0 ? (
                    <p>Loading filters...</p>
                ) : (
                        <ul>
                            <li
                                className={`${active === null ? 'active' : ''}`}
                                onClick={() => setFilterTypeHendler(null)}
                            >All</li>
                            {
                                filters.length && filters.map((item, index) => {
                                    return (
                                        <li
                                            className={`${active === item ? 'active' : ''}`}
                                            key={`${item}_${index}`}
                                            onClick={() => setFilterTypeHendler(item)}
                                        >{item}</li>
                                    )
                                })
                            }
                        </ul>
                    )}
            </div>
        </div>
    )
}
