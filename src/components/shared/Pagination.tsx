import React, {useState} from 'react';
import classNames from "classnames";


type PropsType = {
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    portionSize?: number,
    totalPages: number
}
let Pagination: React.FC<PropsType> = ({
                                           currentPage,
                                           onPageChanged,
                                           portionSize = 10,
                                           totalPages
                                       }) => {
    let pages: Array<number> = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(totalPages / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    React.useEffect(() => {
        const currentPortionNumber = Math.ceil(currentPage / portionSize);
        setPortionNumber(currentPortionNumber);
    },[currentPage]);


    return (
        <ul className={'pagination'}>
            {portionNumber > 1 && <li className={'pagination__button'} onClick={() => setPortionNumber(portionNumber - 1)}>Prev Page</li>}
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(elem => {
                        return <li
                            key={elem}
                            className={classNames({
                                'active': elem === currentPage,
                                'pagination__page': 1
                            })}
                            onClick={() => onPageChanged(elem)}>{elem}</li>
                    })
            }
            {portionCount > portionNumber &&
            <li className={'pagination__button'} onClick={() => setPortionNumber(portionNumber + 1)}>Next Page</li>
            }
        </ul>
    )
}

export default Pagination;
