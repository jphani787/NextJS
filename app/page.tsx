import Image from "next/image";
import backgroungImage from "../../book-store/public/home/home-bg.jpg";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
      <Image
        className="blur-sm"
        src={backgroungImage}
        alt="background image"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="flex flex-col justify-center items-center bg-purple-100 rounded-md p-2 z-10 lg:w-2/5 h-1/4">
        <div className="flex pb-5 mb-5 text-5xl text-purple-800">
          <SparklesIcon className="w-12 h-12" />
          <p>LitLoop</p>
        </div>
        <div>
          <Link
            className="bg-purple-800 text-white mr-1 p-2 rounded-sm hover:bg-purple-700"
            href="/store"
          >
            {" "}
            Take me to the Store{" "}
          </Link>
          <Link
            className="bg-purple-800 text-white mr-1 p-2 rounded-sm hover:bg-purple-700"
            href="/store/track-order"
          >
            Track Order
          </Link>
          <Link
            className="bg-purple-800 text-white mr-1 p-2 rounded-sm hover:bg-purple-700"
            href="/store/communities"
          >
            Communities
          </Link>
          <Link
            className="bg-purple-800 text-white p-2 rounded-sm hover:bg-purple-700"
            href="/store/about"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
