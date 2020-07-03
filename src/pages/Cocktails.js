import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function Cocktails() {
  const [searchText, setSearchText] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const search = async () => {
    try {
      const queryParam = encodeURIComponent(searchText);
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryParam}`
      ).then((r) => r.json());
      console.log("data:", data);
      setCocktails(data.drinks);
    } catch (error) {
      console.log("Something went wrong");
    }
    console.log("wat is cocktails", cocktails);
  };

  return (
    <div>
      <h1>Find your cocktail</h1>
      <p>
        <input
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>

      {cocktails.map((cocktail) => {
        return (
          <div key={cocktail.idDrink}>
            <p>Name: {cocktail.strDrink}</p>
            <img
              className="cocktailImg"
              src={cocktail.strDrinkThumb}
              alt="poster"
            />
          </div>
        );
      })}
    </div>
  );
}
