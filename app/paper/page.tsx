import SideBar from "../components/SideBar";

function ViewPapers() {
  return (
    <div className="h-full w-full flex gap-4">
      <SideBar />
      <div className="m-4 p-4 w-full bg-base-50">
        <h1 className="mt-10">Notes:</h1>
      </div>
    </div>
  );
}

export default ViewPapers;
