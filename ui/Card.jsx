import Image from "next/image"
import Link from "next/link"

const Card = ({ book }) => {
  return (
    <div className="h-70">
      <div className="card bg-base-100 w-full h-full shadow-sm flex flex-col overflow-hidden">

        <figure className="relative h-56 w-full">
          <Image
            src={book.image_url}
            alt={book.title}
           width={150}
           height={150}
            className="object-cover"
          />
        </figure>

        <div className="card-body flex flex-col text-white bg-gradient-to-r from-purple-500 to-purple-400">

          <div className="flex justify-between items-start gap-2">
            <h2 className="card-title line-clamp-1">
              {book.title}
            </h2>

            <div className="badge badge-secondary shrink-0">
              {book.category}
            </div>
          </div>

          <p className="text-sm flex-grow">
            {book.author}
          </p>

          <div className="card-actions justify-end mt-4">
            <Link href={`/Book/${book.id}`} className="btn">
              View Details
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card