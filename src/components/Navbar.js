"use client";

import { useRouter } from "next/navigation";
import OwnButton from "./OwnButton";

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
      <OwnButton isLoading={false} type={"button"} onClickFunc={() => router.push("/home")}>
        Home
      </OwnButton>
      <OwnButton isLoading={false} type={"button"} onClickFunc={() => router.push("/settings")}>
        Settings
      </OwnButton>
      <OwnButton isLoading={false} type={"button"} onClickFunc={onLogout}>
        Logout
      </OwnButton>
    </div>
  );
}
