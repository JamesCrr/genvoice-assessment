"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUserStore } from "./provider";
import OwnButton from "@/components/OwnButton";

export default function Home() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  let [isLoading, setIsLoading] = useState(false);
  let [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      // Read the form data
      let formData = new FormData(event.target);
      formData = Object.fromEntries(formData);

      // Send Request
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      // Handle response
      const responseData = await response.json();
      if (responseData["success"] == true) {
        // Redirect
        setUser({ username: formData["username"] });
        router.replace("/home");
      } else {
        setErrorMsg(responseData["msg"]);
      }
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={onSubmit} className="w-1/2">
        <div className="mb-6">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Username
          </label>
          <input
            name="username"
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john doe"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <OwnButton isLoading={isLoading} type={"submit"} onClick={() => {}}>
          Submit
        </OwnButton>
        {errorMsg != "" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errorMsg}</p>}
      </form>
    </div>
  );
}
