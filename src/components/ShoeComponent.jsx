const ShoeComponent = ({ shoe }) => {
  
  return (
    <div
      className="
            rounded-2xl 
            cursor-pointer
            max-sm:flex-1
        ">
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-2xl max-sm:p-4">
        <img
          className="object-contain"
          src={shoe.thumbnail}
          alt="shoe"
          width={120}
          height={100}
        />
      </div>
    </div>
  );
};

export default ShoeComponent;
