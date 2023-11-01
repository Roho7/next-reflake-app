"use client";

import SearchPapers from "./components/SearchPaperForm";

function Homepage() {
  return (
    <div className="h-full mt-20">
      <div className="primary-box bg-base-50 flex flex-col gap-2 justify-between">
        <h2 className="font-bold">Start Collecting Knowledge</h2>
        <div>
          <p className="text-base-500 mb-2">Enter a DOI to add a paper</p>
          <SearchPapers />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
