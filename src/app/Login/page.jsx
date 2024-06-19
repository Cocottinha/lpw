import { LoginForm } from "@/components/LoginForm/loginForm";

export default function Login() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Login
          </h2>
          <LoginForm/>
        </div>
      </main>
    );
  }
  