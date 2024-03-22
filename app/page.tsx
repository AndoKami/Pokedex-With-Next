import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-4 flex justify-center items-center h-screen">
      <Link href={"/client"} className="px-4 py-2 bg-sky-500 text-white rounded-md">
        Client
      </Link>
      <Link href={"/server"} className="px-4 py-2 bg-sky-500 text-white rounded-md">
        Server
      </Link>
    </div>
  );
}
