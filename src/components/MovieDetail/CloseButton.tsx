import React from 'react';

type Props = {
    onClick: () => void
}

const CloseButton: React.FC<Props> = ({onClick}) => {
    return (
        <button className={'trailer__close'} onClick={onClick}>
            <svg id="Capa_1" enableBackground="new 0 0 413.348 413.348" height="28" viewBox="0 0 413.348 413.348"
                 width="28" xmlns="http://www.w3.org/2000/svg" fill={'#fff'}>
                <path
                    d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/>
            </svg>
        </button>
    )
}

export default CloseButton;