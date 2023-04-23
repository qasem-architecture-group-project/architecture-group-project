import Navigation from "@/components/navigation";
import pool from "../public/pool.jpg";
import Image from "next/image";

export default function Demo() {
  return (
    <div>
      <Navigation />
      <div className="h-32 w-64 m-12 mt-32 border-4 border-sky-500 hover:bg-opacity-0 bg-blue-900 text-blue-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eum
        nihil assumenda doloribus voluptas eaque praesentium sequi
      </div>
      <Image alt="pool" src={pool} className="w-32 h-32 bg-cover" />
    </div>
  );
}
