import React from 'react';
import { Button, PokemonItem, SelectedPokemon, Loader } from './';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsState, IPokemonItem } from '../redux/reducers/pokemonsReducer';
import { getAppState } from '../redux/reducers/appReducer';
import { fetchPokemons, setSelectedPokemon } from '../redux/actions/pokemons';
import { filterByType, getFilterState } from '../redux/reducers/filterReducer';

export const MainContent: React.FC = () => {

    const { pokemons, selectedPokemon } = useSelector(getPokemonsState);
    const { showLoader } = useSelector(getAppState);
    const { filterType } = useSelector(getFilterState);

    const dispatch = useDispatch();

    const loadMorePokemons = () => {
        dispatch(fetchPokemons(pokemons.length));
    }

    const selectPokemon = React.useCallback((item: IPokemonItem) => {
        dispatch(setSelectedPokemon(item));
    }, []);

    React.useEffect(() => {
        dispatch(fetchPokemons(pokemons.length));
    }, []);

    const itemToRender = filterByType(pokemons, filterType);

    return (
        <section className="main-content">
            <div className="container">
                <div className="main-content__inner">
                    {showLoader ? (
                        <div className="pokemons-list">
                            {Array(12).fill(0).map((_, index) => <Loader key={index} />)}
                        </div>
                    ) : (
                            <div className="pokemons-list">
                                {itemToRender.length === 0 && pokemons.length !== 0 &&
                                    <p className='no-filtered-items'>
                                        There are not any {filterType} pokemons in this chunk, load more please :)
                                    </p>
                                }
                                {itemToRender.map((item, index) => {
                                    return (
                                        <PokemonItem
                                            key={`${item.name}_${index}`}
                                            onClickHendler={() => selectPokemon(item)}
                                            name={item.name}
                                            imgUrl={item.imgUrl}
                                            types={item.types}
                                        />
                                    )
                                }
                                )}
                                {pokemons.length !== 0 && pokemons.length < 1050 && <Button
                                    disabled={showLoader}
                                    onClickHendler={loadMorePokemons}
                                />}
                            </div>
                        )}
                    <div className="pokemon-selected-view">
                        {selectedPokemon !== null && <SelectedPokemon {...selectedPokemon} />}
                    </div>
                </div>
            </div>
        </section >
    )
}
