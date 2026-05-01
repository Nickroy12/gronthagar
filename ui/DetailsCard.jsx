import Image from "next/image";
import React from "react";

const DetailsCard = ({ book }) => {
  if (!book) return <div>No Data Found</div>;

  return (
    <div className="w-10/12 mx-auto shadow p-2 ">
      <div className="lg:flex  gap-4">
        <div>
          <Image
            src={book.image_url}
            width={370}
            height={370}
            alt={book.title}
            className="rounded-lg border-1 border-purple-500"
          />
        </div>
        <div className="space-y-3">
          <div className="flex justify-between mt-3">
            <h2 className="text-3xl text-purple-500 font-bold">{book.title}</h2>
            <div className="badge text-white bg-linear-to-r from-purple-500 to-purple-400">
              {book.category}
            </div>
          </div>
          {book.author && (
            <p>
              {" "}
              By <span className="text-2xl font-semibold">{book.author}</span>
            </p>
          )}
          <p>{book.description}</p>
          <div className="flex justify-between">
            <h3 className="text-xl text-gray-600"> In stock <span className="text-xl font-bold text-purple-500">{book.available_quantity}</span></h3>
            <button className="btn rounded-4xl bg-linear-to-r from-purple-500 to-purple-400 text-white">Borrow Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
