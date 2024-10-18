"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const onLogout = async (event) => {
    event.preventDefault();
    try {
      // Send Request
      const response = await fetch("/api/logout", {
        method: "POST",
      });
    } catch (error) {
      console.error(error);
    }

    // Redirect
    router.replace("/");
  };

  return (
    <div className="mt-5 flex justify-center items-center gap-4">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => router.push("/home")}
      >
        Home
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => router.push("/settings")}
      >
        Settings
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}
