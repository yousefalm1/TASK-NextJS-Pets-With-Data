import ImageWithFallback from "@/components/ImageWithFallback";
import pets from "@/data/pets";
import { redirect } from "next/navigation";

function PetDetailPage({ params }) {
  const pet = pets.find(pet => pet.id === +params.id);

  if (!pet) redirect('/pets');

  const { image, name, type, adopted } = pet;
  return (
    <div className="w-screen h-[90vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <ImageWithFallback
            src={image}
            alt={name}
            className="object-contain w-full h-full"
            width={200}
            height={200}
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {name}</h1>
          <h1>Type: {type}</h1>
          <h1>adopted: {adopted ? "yes" : "no"}</h1>

          {!adopted && <button className="w-[70px] border border-black rounded-md  hover:bg-green-400 my-5">
            Adobt
          </button>}

          <button className="w-[70px] border border-black rounded-md  hover:bg-red-400">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetailPage;