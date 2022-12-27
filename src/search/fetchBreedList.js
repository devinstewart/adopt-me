const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];

    if (!animal) {
        return [];
    }

    const apiRes = await fetch(`http://localhost:3000/breeds?animal=${animal}`);

    if (!apiRes.ok) {
        throw new Error(`http://localhost:3000/breeds?animal=${animal} failed`);
    }

    return apiRes.json();
};

export default fetchBreedList;
