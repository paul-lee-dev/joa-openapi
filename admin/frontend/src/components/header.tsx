import { HiUser } from "react-icons/hi";

export default function Header() {
  return (
    <header className="bg-green-800 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Overview</h1>
      <div className="flex items-center">
        <span className="mr-2">Username</span>
        <HiUser></HiUser>
      </div>
    </header>
  );
}
