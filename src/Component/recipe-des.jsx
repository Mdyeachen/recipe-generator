import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import env from "./../auth.json";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function RecipeDes(prop) {
  const [recipeDescription, setRecipeDescription] = useState("");

  useEffect(() => {
    const fetchRecipeDescription = async () => {
      try {
        const genAI = new GoogleGenerativeAI(env["gemini-api"]);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        // Use the ingredient list in the prompt
        const prompt = `Suggest a recipe using the following ingredients: ${prop.ingredientList.join(", ")}`;
        const result = await model.generateContent(prompt);

        // Store the generated text in state
        setRecipeDescription(result.response.text());
      } catch (error) {
        console.error("Error generating recipe description:", error);
      }
    };

    fetchRecipeDescription();
  }, [prop.ingredientList]); // Dependency array ensures the effect runs when ingredientList changes

  return (
    <>
      <h1>Recipe Suggestions</h1>
      <h2>Ingredients: {prop.ingredientList.join(", ")}</h2><br />
      <Markdown>
        {recipeDescription ? recipeDescription : "Generating recipe..."}
      </Markdown>
    </>
  );
}
