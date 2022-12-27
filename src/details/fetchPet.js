const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];

    const apiRes = await fetch(`http://localhost:3000/pets/${id}`);

    if (!apiRes.ok) {
        throw new Error(`http://localhost:3000/pets/${id} failed`);
    }

    return apiRes.json();
};

export default fetchPet;
