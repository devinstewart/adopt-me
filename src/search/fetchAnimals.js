const fetchAnimals = async () => {
    const apiRes = await fetch(`http://localhost:3000/animals`);

    if (!apiRes.ok) {
        throw new Error(`http://localhost:3000/animals failed`);
    }

    return apiRes.json();
};

export default fetchAnimals;
