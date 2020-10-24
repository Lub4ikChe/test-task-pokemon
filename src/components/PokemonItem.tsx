import React from 'react';

interface PokemonItem {
    imgUrl: string,
    name: string,
    types: Array<string>,
    onClickHendler: () => void
}
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const colors = ['yellow', 'orange'];

export const PokemonItem: React.FC<PokemonItem> = React.memo(({ name, imgUrl, types, onClickHendler }) => {

    return (
        <div className="pokemon-item">
            <div
                onClick={onClickHendler}
                className="pokemon-item-img">
                <img src={imgUrl} alt={`${name}_pokemon`} />
            </div>
            <div className="pokemon-item-name">{capitalize(name)}</div>
            <div className="pokemon-item-types">
                {
                    types.map((item, index) => {
                        return (
                            <div
                                key={`${item}_${index}`}
                                className={`pokemon-type ${colors[index]}`}>{item}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
)