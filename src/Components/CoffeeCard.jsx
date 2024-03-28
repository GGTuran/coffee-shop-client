/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-60" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full">
       <div>
       <h2 className="card-title">Name:{name}</h2>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
       </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button className="btn  join-item">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
