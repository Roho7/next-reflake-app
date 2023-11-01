"use client";

import { useState } from "react";
import { PaperDataType } from "../../config/types/types";

function SearchPapers() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<PaperDataType>();

  const getPaper = async (doi: string) => {
    try {
      const response = await fetch(`https://api.crossref.org/works/${doi}`);
      if (response) {
        const data = await response.json();
        console.log(data.message);
        setResult(data.message);
      } else {
        console.log("no response");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    getPaper(search);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="doin"
          id="doi"
          placeholder="enter a doi..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="" onClick={handleSubmit}>
          Search
        </button>
      </form>
      {result && (
        <div>
          {result.DOI}
          {result.title[0]}
        </div>
      )}
    </div>
  );
}

export default SearchPapers;
