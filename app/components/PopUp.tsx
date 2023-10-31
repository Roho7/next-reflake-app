function PaperPopup() {
  return (
    <div className="absolute z-10 left-1/2 bottom-1/2 bg-base-50 shadow-xl">
      <a className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 p-4 hover:underline">
        X
      </a>
      <div className="p-4">
        <a className="text-base-500"></a>
        <h1 className="font-bold my-1"></h1>
      </div>
      <div className="flex">
        <button className="w-full">Add Paper to</button>
        <select></select>
      </div>
    </div>
  );
}

export default PaperPopup;
