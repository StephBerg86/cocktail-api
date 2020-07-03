import React, { useState, useEffect } from "react";

export default function Cocktails() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
      ).then((r) => r.json());
      setCocktails(data.drinks);
      console.log("what is data", data);
    }
    fetchData();
  }, []);
  console.log("what is cocktails", cocktails);

  return (
    <div>
      <h1>All cocktails</h1>

      {cocktails.map((cocktail) => {
        return (
          <div key={cocktail.idDrink}>
            <h3>Name: {cocktail.strDrink}</h3>
            <img
              className="cocktailImg"
              src={cocktail.strDrinkThumb}
              alt="poster"
            />
            <p>
              Ingredients: {cocktail.strIngredient1}, {cocktail.strIngredient2},{" "}
              {cocktail.strIngredient3}, {cocktail.strIngredient4}
            </p>
            <p>How to make it: {cocktail.strInstructions}</p>
          </div>
        );
      })}
    </div>
  );
}
