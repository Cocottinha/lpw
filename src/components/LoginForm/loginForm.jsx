"use client";
import { FaGoogle } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <div className="items-center">
          <button
            type="submit"
            className="group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Entrar com o Google
            <FaGoogle className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
}
