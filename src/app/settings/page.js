"use client";

import Navbar from "@/components/Navbar";
import OwnButton from "@/components/OwnButton";
import { useUserStore } from "../provider";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Settings() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  let [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      // Read the form data
      let formData = new FormData(event.target);
      formData = Object.fromEntries(formData);
      formData["username"] = user["username"];

      // Send Request
      const response = await fetch("/api/password", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      // Handle response
      const responseData = await response.json();
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);

    // Redirect
    router.replace("/home");
  };

  return (
    <div className="">
      <Navbar />
      <div className=" mt-10 flex flex-col justify-center items-center">
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              New Password
            </label>
            <input
              name="password"
              type="text"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password"
              required
            />
          </div>
          <OwnButton isLoading={isLoading} type={"submit"} onClick={() => {}}>
            Submit
          </OwnButton>
        </form>
      </div>
    </div>
  );
}
