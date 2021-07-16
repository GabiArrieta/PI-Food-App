import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesName } from "../actions/index";


const Search = () => {
    const [recipe, setRecipe] = useState('');

    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setRecipe(e.target.value);    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getRecipesName(recipe));
        setRecipe("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="search"
                    placeholder="Search Recipe"
                    value={recipe}
                    onChange={handleChange}
                    />
                <button
                    type="submit">
                        Search
                    </button>
            </form>      
        </div>
    )
}

export default Search;
