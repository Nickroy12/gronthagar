import Announce from "@/Components/Announce";
import About from "@/Components/home/About";
import AudioBook from "@/Components/home/AudioBook";
import Banner from "@/Components/home/Banner";
import Book from "@/Components/home/Book";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner/>
      <Announce/>
      <Book/>
      <About/>
      <AudioBook/>
    </div>
  );
}
