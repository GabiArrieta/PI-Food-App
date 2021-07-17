import React from "react";


 const Pagination = ({pag, setPag, max}) => {
    return (
        <div>
            <button type="button" onClick={() => pag === 1 ? setPag(pag) : setPag(parseInt(pag) - 1)}>Previous</button>
            <text> {pag} </text>
            <button type="button" onClick={() => pag === max ? setPag(pag) : setPag(parseInt(pag) + 1)}>Next</button>
        </div>
    )
}

export default Pagination;