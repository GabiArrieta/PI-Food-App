import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getRecipes, 
    getRecipesName,
    getDiets,
    getRecipesForDiet,
    filterAtoZ, 
    filterZtoA, 
    filterHighToLow, 
    filterLowToHigh, 
    filterScoreHealthHigh, 
    filterScoreHealthLow 
} from "../actions/index";


const Search = () => {
    const [recipe, setRecipe] = useState('');
    const [alfab, setAlfab] = useState(0);
    const [score, setScore] = useState(0);
    const [scoreHealth, setScoreHealth] = useState(0);
    const [type, setType] = useState("");

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(getDiets());
    }, [dispatch])
 
    const handleChange = (e) => {
        setRecipe(e.target.value);    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getRecipesName(recipe));
        setRecipe("");
    };

    const handleOrder = (e) => {
        e.preventDefault();
        setAlfab(parseInt(e.target.value));

        if(parseInt(e.target.value) === 1) dispatch(filterAtoZ());
        else if (parseInt(e.target.value) === 2) dispatch(filterZtoA());

        setTimeout(() => setAlfab(0), 3000);
    }

    const handleScore = (e) => {
        e.preventDefault();
        setScore(parseInt(e.target.value));

        if(parseInt(e.target.value) === 1) dispatch(filterHighToLow());
        else if (parseInt(e.target.value) === 2) dispatch(filterLowToHigh());

        setTimeout(() => setScore(0), 3000);
    }

    const handleHealthScore = (e) => {
        e.preventDefault();
        setScoreHealth(parseInt(e.target.value));

        if(parseInt(e.target.value) === 1) dispatch(filterScoreHealthHigh());
        else if (parseInt(e.target.value) === 2) dispatch(filterScoreHealthLow());

        setTimeout(() => setScoreHealth(0), 3000);
    }

    const handleDiet = (e) => {
        e.preventDefault();
        setType(e.target.value)
        if (e.target.value === "All") {
            dispatch(getRecipes());
        } else {
            dispatch(getRecipesForDiet(e.target.value))
        };
        setTimeout(() => setType(""), 2000);
    };

    return (
        <div>
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

            <div>
                <select 
                    value={alfab}
                    name='select order'
                    onChange={handleOrder}
                    defaultValue={0}
                >
                <option key={"select 0"} value={0}>order by</option>
                <option key={"select 1"} value={1}> A - Z </option>
                <option key={"select 2"} value={2}> Z - A </option>

                </select>
            </div>

            <div>
            <select 
                value={score}
                name='select score'
                onChange={handleScore}
                defaultValue={0}
                >

                <option key={"select 0"} value={0}>select score</option>
                <option key={"select 1"} value={1}> low to high </option>
                <option key={"select 2"} value={2}> high to low </option>
            </select>
            </div>

            <div>
            <select 
                value={scoreHealth}
                name='select score health'
                onChange={handleHealthScore}
                defaultValue={0}
                >

                <option key={"select 0"} value={0}>select score health</option>
                <option key={"select 1"} value={1}> low to high </option>
                <option key={"select 2"} value={2}> high to low </option>
            </select>
            </div>

            <div>
            <span>Filter By Diet: </span>
            <select value={type} name="select-diet" onChange={handleDiet} defaultValue="">
            <option key={0} value=""> select diet type: </option>
            <option key={1} value="All"> All </option>
            {state.diets.map((d, i) =>
                <option
                    key={"select-diet" + i}
                    value={d.title}
                >
                    {d.title}
                </option>)}
        </select>
			</div>
        </div>
    )
}

export default Search;
