import { useRouter } from "next/router";

function ViewLakes() {
  const router = useRouter();

  return (
    <div className="w-full h-full p-10">
      <h1 className="mb-4 font-bold text-6xl">All Lakes</h1>
      <div className="grid grid-row-4 w-full"></div>
    </div>
  );
}

export default ViewLakes;
