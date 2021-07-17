import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiets, postRecipe } from "../actions/index";
import swal from 'sweetalert';

import axios from 'axios';


const formData = {
  title: "",
  summary: "",
  score: "",
  healthScore: "",
  diets: [],
  instructions: "",
};

//pasarlo a utils, validaciones
export const validate = (recipe) => {
  let error = {};

  if (!recipe.title) error.title = "title required";
  if (!recipe.summary) error.title = "summary required";
  if (!recipe.instructions) error.instructions = "type an instruction";

  if (!/^([0-9])*$/.test(recipe.score)) error.score = "score is not a number";
  else if (recipe.score < 0 || recipe.score > 100)
    error.score = "score must be between 0 and 100";

  if (!/^([0-9])*$/.test(recipe.healthScore))
    error.healthScore = "healthScore is not a number";
  else if (recipe.score < 0 || recipe.score > 100)
    error.score = "healthScore must be between 0 and 100";

  if (recipe.diets.length === 0) error.diet = "select at least one diet";

  return error;
};

export const FORMS = [
  { label: "💬Title", name: "title" },
  { label: "🫕Summary", name: "summary" },
  { label: "🍏healthScore", name: "healthScore" },
  { label: "⭐score", name: "score" },
  { label: "📄Instructions", name: "instructions" },
  { label: "🌱Diets", name: "diets" },
];

const Form = () => {
  const dispatch = useDispatch();

  const diets = useSelector((state) => state.diets);

  const [form, setForm] = useState({
    title: "",
    summary: "",
    score: "",
    healthScore: "",
    diets: [],
    instructions: "",
  });

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
      !error.score && form.score &&
      !error.healthScore && form.healthScore &&
      !error.instructions && form.instructions &&
      !error.summary && form.summary &&
      form.diets.length ){

        console.log("formulario correcto");
        
        //dispatch(postRecipe(form));
        axios.post('http://localhost:3008/recipe', form)

        console.log("se envio la receta");
        //alert("recipe added :) ");
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
      <h1>Create your own recipe!</h1>
      <form>
        <div>
          <p>💬Title</p>
          <input
            type="text"
            value={form.title}
            id="title"
            name="title"
            onChange={handleChange}
            placeholder="💬Title"
          />
          <p>Summary</p>  
          <textarea
            name="summary"
            id="summary"
            value={form.summary}
            onChange={handleChange}
            placeholder="Summary"
          ></textarea>

          <p>score</p>
          <input
            type="text"
            value={form.score}
            id="score"
            name="score"
            onChange={handleChange}
            placeholder="Score"
          />

          <p>healthScore</p>
          <input
            type="text"
            value={form.healthScore}
            id="healthScore"
            name="healthScore"
            onChange={handleChange}
            placeholder="healthScore"
          />
        
        <p>Instructions</p>  
          <textarea
            name="instructions"
            id="instructions"
            value={form.instructions}
            onChange={handleChange}
            placeholder="Instructions"
          ></textarea>
          </div>

          <div>
            {diets.length > 0 &&
                diets.map((diet) => (
                    <label
							          // htmlFor={diet.id
												// .toLowerCase()
												// .replace(' ', '')
												// .replace('-', '')}
										>
											<input
												key={diet.id}
												// id={diet.id
												// 	.toLowerCase()
												// 	.replace(' ', '')
												// 	.replace('-', '')}
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

        <div>
        <button onClick={handleReset}> Reset </button>
        <button onClick={handleSubmit}> Send </button>
        
        </div>
      </form>
    </div>
  );
};

export default Form;
