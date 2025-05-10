import { useState, useEffect, useRef } from "react"
import RecipeTemplate from "./rec-tem";
import RecipeDes from "./recipe-des";

export default function Header(){
   

   const [ingredientListItem, setIngredient] = useState([]);

   const fromSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget)
      const newIngredent = formData.get("ingredient")
      setIngredient(e => [...e, newIngredent])
      e.target.reset();
   }

   const [hideRecipe, showRecipe] = useState(false);
   const shownRecipe = () => {
      showRecipe(prev => !prev);
   }

   const recipeSection = useRef(null);
   console.log(recipeSection);

   useEffect(()=> {
      if(recipeSection !== "" & recipeSection.current !== null){
         recipeSection.current.scrollIntoView({behavior : "smooth"})
      }
   }, [hideRecipe])

   return (
      <>
         <RecipeTemplate 
         ref={recipeSection}
         fromSubmit={fromSubmit}
         ingredientListItem={ingredientListItem}
         shownRecipe={shownRecipe}
         hideRecipe={hideRecipe}
         />
         <div className="recipeDes">
            {
               hideRecipe ? 
               <RecipeDes
               ingredientList = {ingredientListItem}
               /> : 
               null
            }
         </div>
         
         
      </>
   )
}