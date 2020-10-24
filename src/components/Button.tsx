import React from 'react';

interface Button {
    disabled: boolean,
    onClickHendler: () => void
}

export const Button: React.FC<Button> = React.memo(({ onClickHendler, disabled }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClickHendler}
            className="load-more-btn">
            Load More
        </button>
    )
})
