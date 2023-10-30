import { useRecoilValue } from "recoil";
import { lakesState } from "../../config/atoms/atoms";
import { LakeType } from "../../config/types/types";
import { useRouter } from "next/router";

function ViewLakes() {
  const lakes = useRecoilValue(lakesState);
  const router = useRouter();
  const handleLakeClick = (lake: string) => {
    router.push(`/lakes/${lake}`);
    console.log();
  };
  return (
    <div className="w-full h-full p-10">
      <h1 className="mb-4 font-bold text-6xl">All Lakes</h1>
      <div className="grid grid-row-4 w-full">
        {lakes.map((item: LakeType) => {
          return (
            <div className="home-button-box group">
              <div
                className="home-btn"
                onClick={() => handleLakeClick(item.lakeName)}
                key={item.lakeName}
              >
                <h2 className="text-seal-500">{item.lakeName}</h2>
                <p className="text-seal-100">Papers: {item.papers.length}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewLakes;
