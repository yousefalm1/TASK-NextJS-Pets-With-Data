import PetsContainer from './components/PetsContainer';
import { fetchingPets } from '@/actions';

const PetsPage = async () => {
  const pets = await fetchingPets();
  return <PetsContainer pets={pets} />;
};

export default PetsPage;
