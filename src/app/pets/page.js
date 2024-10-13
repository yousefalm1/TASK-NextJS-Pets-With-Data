// import Modal from "./Modal";
import PetsList from "@/app/pets/components/PetsContainer/PetsList";
import pets from "@/data/pets";

import PetsContainer from "./components/PetsContainer";

function PetsPage() {
  return (
    <PetsContainer pets={pets} />
  );
};

export default PetsPage;