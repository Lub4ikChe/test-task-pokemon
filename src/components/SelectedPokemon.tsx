import React from 'react';
import { IPokemonItem } from '../redux/reducers/pokemonsReducer';
import { capitalize } from './PokemonItem';


export const SelectedPokemon: React.FC<IPokemonItem> = React.memo(({ imgUrl, name, totalMoves, hp, weight, spAttack, spDefense, speed, defense, attack, types }) => {
    return (
        <div className="pokemon-selected-item">
            <div className="pokemon-selected-item-img">
                <img src={imgUrl} alt={`${name}_pokemon`} />
            </div>
            <div className="pokemon-selected-item-name">{capitalize(name)}</div>
            <div className="pokemon-selected-item-characteristics">
                <table>
                    <tbody>
                        <tr>
                            <td>Type</td>
                            <td>{types[0]}</td>
                        </tr>
                        <tr>
                            <td>Attack</td>
                            <td>{attack}</td>
                        </tr>
                        <tr>
                            <td>Defense</td>
                            <td>{defense}</td>
                        </tr>
                        <tr>
                            <td>HP</td>
                            <td>{hp}</td>
                        </tr>
                        <tr>
                            <td>SP Attack</td>
                            <td>{spAttack}</td>
                        </tr>
                        <tr>
                            <td>SP Defense</td>
                            <td>{spDefense}</td>
                        </tr>
                        <tr>
                            <td>Speed</td>
                            <td>{speed}</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>{weight}</td>
                        </tr>
                        <tr>
                            <td>Total moves</td>
                            <td>{totalMoves}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
)