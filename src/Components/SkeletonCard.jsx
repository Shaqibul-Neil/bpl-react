const SkeletonCard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-4 animate-pulse h-[420px] mb-4">
      {/* image placeholder */}
      <div className="h-48 w-full bg-gray-300 rounded"></div>
      {/* name */}
      <div className="mt-4 flex gap-3 items-center">
        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
      </div>
      {/* country & role */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-3 w-6 bg-gray-300 rounded"></div>
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
        </div>
        <div className="h-6 w-24 bg-gray-300 rounded"></div>
      </div>
      {/* stats */}
      <div className="mt-4 space-y-3">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="flex justify-between items-center">
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
