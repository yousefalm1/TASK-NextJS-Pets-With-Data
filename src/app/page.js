import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-[90vh] flex flex-col justify-center items-center md:flex-row font-mono">
      <h1 className="text-center text-[60px] ">
        Welcome to theeeee best pets shop
      </h1>
      <Image
        src="https://img.freepik.com/premium-vector/cute-petshop-logo-with-cat-dog_454510-56.jpg"
        alt="Pets image logo"
        width={300}
        height={300}
      />
    </div>
  );
}
