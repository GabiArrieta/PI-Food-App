import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../actions/index';
import Pagination from './Pagination';
import Card from './Card';
import Loading from './Loading';
import Search from './Search';


const HomePage = () => {
    const [recipe, setRecipe]= useState(); //modificar estados, esta mal

    const [pag, setPag] = useState(1);
    const [page, setPage] = useState([]);

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const maxPages = Math.ceil(state.recipes / 9);

    const paginater = (recipes, index) => {
        const pags = recipes.slice((index-1)*8, (index*8));
        return pags;
    }

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);

    useEffect(() => {
        setPage(paginater(state.recipes, pag));
    }, [pag, state])

    
    return (
    <>
        <div>
            <Search/>
        </div>

        <div>
            {state.loading ? <Loading /> :
                (
                    <div>
                        <Pagination pag={pag} setPag={setPag} max={maxPages} />
                        {state.recipes.length > 0 ?
                            page && page.map(recipe => 
                            <Card
                                key={`recipe-${recipe.id}`}
                                id={recipe.id}
                                title={recipe.title}
                                score={recipe.score}
                                healthScore={recipe.healthScore}
                                img={recipe.img}
                                diets={recipe.diets}
                            />) :
                            <div>
                                <h1>Recipes not found</h1>
                                <button type="button" onClick={() => { dispatch(getRecipes()) }}>Return</button>
                            </div>}
                    </div>
                )}
            </div>
        </>
    );
}

export default HomePage;
