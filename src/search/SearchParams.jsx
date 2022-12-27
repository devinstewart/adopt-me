import { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import Results from '../results/Results';
import useBreedList from './useBreedList';
import fetchSearch from './fetchSearch';
import fetchAnimals from './fetchAnimals';
import fetchStates from './fetchStates';
import AdoptedPetContext from '../AdoptedPetContext';

const SearchParams = () => {
    const statesResults = useQuery(['states'], fetchStates);
    const states = statesResults?.data ?? [];
    const animalsResults = useQuery(['animals'], fetchAnimals);
    const animals = animalsResults?.data ?? [];
    const [adoptedPet] = useContext(AdoptedPetContext);
    const [requestParams, setRequestParams] = useState({
        city: '',
        state: '',
        animal: '',
        breed: ''
    });
    const [animal, setAnimal] = useState('');
    const [breeds] = useBreedList(animal);

    const petsResults = useQuery(['search', requestParams], fetchSearch);
    const pets = petsResults?.data ?? [];

    return (
        <div className='search-params'>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const obj = {
                        city: formData.get('city') ?? '',
                        state: formData.get('state') ?? '',
                        animal: formData.get('animal') ?? '',
                        breed: formData.get('breed') ?? ''
                    };
                    setRequestParams(obj);
                }}
            >
                {adoptedPet ? (
                    <div className='pet image-container'>
                        <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
                    </div>
                ) : null}
                <label htmlFor='city'>
                    City
                    <input
                        id='city'
                        name='city'
                        placeholder='city (optional)'
                    />
                </label>
                <label htmlFor='state'>
                    State
                    <select
                        disabled={states.length === 0}
                        id='state'
                        name='state'
                    >
                        <option />
                        {states.map((state) => (
                            <option key={state}>{state}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor='animal'>
                    Animal
                    <select
                        id='animal'
                        name='animal'
                        onChange={(e) => {
                            setAnimal(e.target.value);
                        }}
                    >
                        <option />
                        {animals.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor='breed'>
                    Breed
                    <select
                        disabled={breeds.length === 0}
                        id='breed'
                        name='breed'
                    >
                        <option />
                        {breeds.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
