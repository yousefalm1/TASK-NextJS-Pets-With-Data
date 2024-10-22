'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const baseUrl = `https://pets-react-query-backend.eapi.joincoded.com`;

const headers = new Headers();
headers.append('Content-Type', 'application/json');

export const fetchingPets = async () => {
  const response = await fetch(`${baseUrl}/pets`);

  const pets = await response.json();
  return pets;
};

export const fetchingPetsDetails = async (id) => {
  let pet;
  const response = await fetch(`${baseUrl}/pets/${id}`);

  try {
    pet = await response.json();
  } catch (error) {
    console.error('No Pet Found');
    redirect('/pets');
  }

  return pet;
};

export const createPet = async (formData) => {
  const petData = {
    ...Object.fromEntries(formData),
    adopted: 0,
  };
  const response = await fetch(`${baseUrl}/pets`, {
    method: 'POST',
    headers,
    body: JSON.stringify(petData),
  });

  const newPet = await response.json();

  revalidatePath('/pets');
  redirect('/pets');
};

export const deletePet = async (id) => {
  const response = await fetch(`${baseUrl}/pets/${id}`, {
    method: 'DELETE',
    headers,
  });

  redirect('/pets');
};
