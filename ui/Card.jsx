import Image from "next/image"
import Link from "next/link"

const Card = ({ book }) => {
  return (
    <div className="h-full">
      <div className="card bg-base-100 w-full h-full shadow-sm flex flex-col overflow-hidden">
        
        <figure className="h-48 flex items-center justify-center">
          <Image
            src={book.image_url}
            alt={book.title}
           fill
            className="object-contain "
          />
        </figure>

        <div className="card-body flex flex-col text-white bg-linear-to-r z-10 from-purple-500 to-purple-400">
          
          <h2 className="card-title">
            {book.title}
            <div className="badge badge-secondary ">{book.category}</div>
          </h2>

        

          <div className="card-actions justify-between mt-auto">
            <p>{book.author}</p>
            <Link  href={`/Book/${book.id}`} className="btn">View Details</Link>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Card