import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { api } from "./api/api";

export default function Login() {
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await api.post("/login", {
        login: login,
        password: password,
      });
      if (response.data.status === "Error") {
        console.log("Error");
      } else {
        console.log(response);
        router.push(`/dashboard`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 h-screen">
      <div className="bg-purple-900 flex justify-center items-center h-1/2 sm:h-screen lg:h-screen bg-bg-ng bg-no-repeat bg-center bg-cover p-10">
        <div>
          <h1 className="text-white text-[40px] sm:text-[60px] lg:text-[60px] font-black">
            A CARTEIRA DA NOVA GERAÇÃO.
          </h1>
          <h2 className="text-white text-[30px] sm:text-[50px] lg:text-[50px]">
            É para todas as idades!
          </h2>
        </div>
      </div>
      <div className="bg-white flex justify-center items-center h-1/2 sm:h-screen lg:h-screen">
        <form
          className="flex flex-col gap-4 p-4 bg-purple-900 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Login"
            className="p-4 rounded-xl"
            onChange={(event) => setLogin(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 rounded-xl"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="submit"
            className="w-full p-4 bg-black text-white hover:bg-black-900 rounded-2xl"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
