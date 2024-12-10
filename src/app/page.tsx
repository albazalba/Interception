import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <Link
        href={"/login"}
        className="px-4 py-2 w-[250px] text-center hover:bg-background text-white rounded-md bg-transparent border border-[#2e2e2e] shadow-sm"
      >
        Login
      </Link>
    </div>
  );
}
