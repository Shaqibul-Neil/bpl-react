import SkeletonCard from "./SkeletonCard";

const Skeleton = () => {
  //array of 20 items
  const skeletonArray = Array.from({ length: 21 });
  return (
    <div className="grid grid-cols-3 gap-3 min-h-screen">
      {skeletonArray.map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default Skeleton;
