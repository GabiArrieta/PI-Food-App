import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesName, switchLoading } from '../../actions/index.js';
import SearchIcon from '@material-ui/icons/Search';
import './search.css'

export default function Search({ setSearch }) {
	const [nameRecipe, setNameRecipe] = useState('');
	const dispatch = useDispatch();

	function handleChange(e) {
		setNameRecipe(e.target.value);
	}

	function handleSubmit(e) {
		if (nameRecipe) {
			e.preventDefault();
			dispatch(switchLoading(true));
			dispatch(getRecipesName(nameRecipe));
			setSearch(true);
			setNameRecipe('');
		}else{
			e.preventDefault();
			setSearch(false);
		}
	}

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit} >
				<div className='box'>
				<input
					className='input-search'
					type='text'
					placeholder='Search your recipe'
					value={nameRecipe}
					onChange={handleChange}
				/>
				<button className='btn-search' type='submit'>
				<SearchIcon className="searchIcon" />
				</button>
				</div>
			</form>
		</React.Fragment>
	);
}