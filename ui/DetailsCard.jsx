"use client";

import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";


const DetailsCard = ({ book }) => {
  const router = useRouter();


  if (!book) return <div>No Data Found</div>;

  const borrowBook = () => {

    toast.success("Your Borrow successful!");
  };

  return (
    <div className="w-10/12 mx-auto lg:h-[70vh] shadow p-2">
      <div className="lg:flex gap-4">
        <div>
          <Image
            src={book.image_url}
            width={370}
            height={370}
            alt={book.title}
            className="rounded-lg border border-purple-500"
          />
        </div>

        <div className="space-y-3 flex-1">
          <div className="flex justify-between mt-3">
            <h2 className="text-3xl text-purple-500 font-bold">
              {book.title}
            </h2>

            <div className="badge text-white bg-gradient-to-r from-purple-500 to-purple-400">
              {book.category}
            </div>
          </div>

          {book.author && (
            <p>
              By{" "}
              <span className="text-2xl font-semibold">
                {book.author}
              </span>
            </p>
          )}

          <p>{book.description}</p>

          <div className="flex justify-between items-center">
            <h3 className="text-xl text-gray-600">
              In stock{" "}
              <span className="text-xl font-bold text-purple-500">
                {book.available_quantity}
              </span>
            </h3>

            <button
              onClick={borrowBook}
              className="btn rounded-4xl bg-gradient-to-r from-purple-500 to-purple-400 text-white"
            >
              Borrow Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;