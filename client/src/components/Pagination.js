import React from "react";


 const Pagination = ({pag, setPag, max}) => {
    return (
        <div>
            <button type="button" onClick={() => setPag(1)}> prev </button>
            <button type="button" onClick={() => setPag(max)}> next </button>

        </div>
    )
}

export default Pagination;