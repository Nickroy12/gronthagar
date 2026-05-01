'use client'
import { useParams } from 'next/navigation';
import data from '@/data/data.json'
import DetailsCard from '@/ui/DetailsCard';

const DetailsPage = () => {
  const params = useParams();
  const id = params.id;
  const book =  data.find(book => book.id === Number(id))

  return <DetailsCard book={book} />
}

export default DetailsPage