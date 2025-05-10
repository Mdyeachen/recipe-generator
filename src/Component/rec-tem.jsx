import { forwardRef } from "react"


export default forwardRef(function RecipeTemplate(prop, ref){
   const ingredientList = prop.ingredientListItem.map((item, index) => (
      <li key={index}>{item[0].toUpperCase()+item.slice(1)}</li>
   ))

   return (
      <>
         <main className="main pad-tb-3rem">
            <div className="contain">
               <form 
               onSubmit={prop.fromSubmit}
               className="flex flex-w f-gap-10 flex-ac flex-jc"
               >
                  <input 
                     type="text"
                     aria-label="Add Ingredient"
                     placeholder="e.g. oregneo" 
                     name="ingredient"
                     required
                  />
                  <input 
                     type="submit" 
                     value="+ Add Ingredient"
                  />
               </form>

            </div>
         </main>

         {
            prop.ingredientListItem.length > 0 ? 
            <div className="ingredientList pad-tb-1rem">
               <div className="contain">
                  <h2>Ingredients on Hand</h2>
                  <ul className="pad-tb-1rem">
                  {ingredientList}
                  </ul>

                  <div ref={ref} className="get-recipe flex flex-sb flex-ac">
                     <div className="flex flex-col f-gap-10">
                        <h3>Ready For Recipe?</h3>
                        <p>Generate a Recipe from your list of Ingredient</p>
                     </div>
                     <button
                     onClick={prop.shownRecipe}
                     aria-label="Generate a recipe">
                        {
                           !prop.hideRecipe ? 
                           "Get a Recipe" : 
                           "Hide The Recipe"
                        }
                     </button>
                  </div>
               </div>
            </div> : 
            null
         }
      </>
   )
})