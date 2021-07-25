import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiets } from "../../actions/index";
import swal from 'sweetalert';

import './form.css';

import axios from 'axios';


const formData = {
  title: '',
  spoonacularScore: '',
  healthScore: '',
	instructions: '',
  summary: '',
  diets: [],
};


//validaciones
export const validate = (recipe) => {
  let error = {};

  if (!recipe.title) error.title = "title required";
  if (!recipe.summary) error.summary = "summary required";
  
  if (!recipe.instructions) error.instructions = "type an instruction";

  if (!/^([0-9])*$/.test(recipe.spoonacularScore)) error.spoonacularScore = "spoonacularScore is not a number";
  else if (recipe.spoonacularScore < 0 || recipe.spoonacularScore > 100)
    error.spoonacularScore = "spoonacularScore must be between 0 and 100";

  if (!/^([0-9])*$/.test(recipe.healthScore))
    error.healthScore = "healthScore is not a number";
  else if (recipe.healthScore < 0 || recipe.healthScore > 100)
    error.healthScore = "healthScore must be between 0 and 100";

  if (recipe.diets.length === 0) error.diet = "select at least one diet";

  return error;
};

const Form = () => {
  const dispatch = useDispatch();

  const diets = useSelector((state) => state.diets);

  const [form, setForm] = useState(formData);
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const handleChange = (e) => {
    setError(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
        setForm({
            ...form,
            diets: [...form.diets, e.target.id],
        });
    } else {
        setForm({
            ...form,
            diets: [...form.diets].filter((diet) => e.target.id !== diet),
        });
    }
};

  const handleSubmit = (e) => {
      e.preventDefault();

      if(
      !error.title && form.title &&
      !error.spoonacularScore && form.spoonacularScore &&
      !error.healthScore && form.healthScore &&
      !error.instructions && form.instructions &&
      !error.summary && form.summary &&
      form.diets.length ){

        //console.log("formulario correcto");
        
        axios.post('http://localhost:3002/recipe', form)

        //console.log("se envio la receta");
        swal({
            title: "Good job!",
            text: "Successfully added!",
            icon: "success",
            button: "Confirm",
          });
          
        setForm(formData);
      } else {
        swal({
            title: "Error",
            text: "Incorrect data, please try again!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
      }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm(formData);
    setError({});
  };

  return (
    <div>
    <div className='form-main-container'>
      <h1 className='form-title'>Create your own recipe!</h1>
      <form>
        <div className='form-container'>
          <div className='form-left-container'>
          
          <p className={error.title ? 'danger' : 'pass'}>💬{error.title}</p>
          <input
            type="text"
            value={form.title}
            id="title"
            name="title"
            onChange={handleChange}
            placeholder="💬Title"
            className={error.title & 'danger'}
          />
          
          <p className={error.summary ? 'danger' : 'pass'}>💬{error.summary}</p>
          <textarea
            name="summary"
            id="summary"
            value={form.summary}
            onChange={handleChange}
            placeholder="🫕Summary"
            className={error.summary & 'danger'}

          ></textarea>

          <p className={error.spoonacularScore ? 'danger' : 'pass'}>💬{error.spoonacularScore}</p>
          <input
            type="text"
            value={form.spoonacularScore}
            id="spoonacularScore"
            name="spoonacularScore"
            onChange={handleChange}
            placeholder="⭐Score"
            className={error.spoonacularScore & 'danger'}

          />

        <p className={error.healthScore ? 'danger' : 'pass'}>💬{error.healthScore}</p>
          
          <input
            type="text"
            value={form.healthScore}
            id="healthScore"
            name="healthScore"
            onChange={handleChange}
            placeholder="🍏healthScore"
            className={error.healthScore & 'danger'}

          />
        
        <p className={error.instructions ? 'danger' : 'pass'}>💬{error.instructions}</p>
          
          <textarea
            name="instructions"
            id="instructions"
            value={form.instructions}
            onChange={handleChange}
            placeholder="📄Instructions"
            className={error.instructions & 'danger'}
          ></textarea>
          </div>
          <div className='form-right-container'>
              <div className='form-diets'>
            {diets.length > 0 &&
                diets.map((diet) => (
                    <label
                    	  key={diet.id}
							          htmlFor={diet.id}
										>
                   
											<input
												id={diet.id}
												type='checkbox'
												name={diet.title
													.toLowerCase()
													.replace(' ', '')
													.replace('-', '')}
												onChange={handleChecked}
											/>
											{diet.title}
										</label>
                )) }
          </div>
      </div>
  </div>
       <div className='form-buttons'>
        <button onClick={handleReset} className='btn-reset'> Reset </button>
        <button onClick={handleSubmit} className='btn-create'> Send </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Form;
