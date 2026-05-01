import Image from "next/image";
import React from "react";

const DetailsCard = ({ book }) => {
  if (!book) return <div>No Data Found</div>;

  return (
    <div className="w-10/12 mx-auto shadow p-2 ">
      <div className="flex gap-4">
        <div>
          <Image
            src={book.image_url}
            width={370}
            height={370}
            alt={book.title}
            className="rounded-lg"
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl text-purple-500 font-bold">{book.title}</h2>
          {book.author && (
            <p>
              {" "}
              By <span className="text-2xl font-semibold">{book.author}</span>
            </p>
          )}
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
