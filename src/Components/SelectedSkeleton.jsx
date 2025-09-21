import SelectedSkeletonCard from "./SelectedSkeletonCard";

const SelectedSkeleton = () => {
  const selectedSkeletonArray = Array.from({ length: 6 });
  return (
    <div className="p-4 mb-4 space-y-2">
      {selectedSkeletonArray.map((_, i) => (
        <SelectedSkeletonCard key={i} />
      ))}
      <button className="btn-Add">Add More Players</button>
    </div>
  );
};

export default SelectedSkeleton;
