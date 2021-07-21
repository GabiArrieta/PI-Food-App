import React from "react";

import './pagination.css';

 const Pagination = ({pag, setPag, max}) => {
    return (
        <div className="paginater">
            <button className='btn-page' type="button" onClick={() => pag === 1 ? setPag(pag) : setPag(parseInt(pag) - 1)}>Previous</button>
            <text className="num-page"> {pag} </text>
            <button className='btn-page' type="button" onClick={() => pag === max ? setPag(pag) : setPag(parseInt(pag) + 1)}>Next</button>
        </div>
    )
}

export default Pagination;