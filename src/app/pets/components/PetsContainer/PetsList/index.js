import PetCard from "./PetCard";

function PetsList({ pets }) {
  const petList = pets.map((pet) => <PetCard pet={pet} key={pet.id} />);

  return (
    <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
      {petList}
    </div>
  )
}

export default PetsList