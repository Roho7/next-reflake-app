function SearchPapers() {
  const getPaper = async (doi: string) => {
    try {
      const response = await fetch(`https://api.crossref.org/works/${doi}`);
      if (response) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log("no response");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="doin"
          id="doi"
          placeholder="enter a doi..."
          // onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
}

export default SearchPapers;
