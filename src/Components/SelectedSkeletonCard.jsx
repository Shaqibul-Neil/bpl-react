const SelectedSkeletonCard = () => {
  return (
    <div className="bg-base-100 w-96 animate-pulse flex justify-between items-center shadow-sm p-4 rounded-xl">
      <div className="flex gap-6 items-center py-2">
        <div className="w-20 bg-gray-300 rounded-xl h-20"></div>
        <div className="space-y-2">
          <div className="h-12 w-12 bg-gray-300 rounded-xl"></div>
          <div className="h-4 w-4 bg-gray-300 rounded-xl"></div>
        </div>
      </div>
      <div>
        <button className="h-4 w-4 bg-gray-300 rounded-xl"></button>
      </div>
    </div>
  );
};

export default SelectedSkeletonCard;
