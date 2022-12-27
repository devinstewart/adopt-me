const fetchSearch = async ({ queryKey }) => {
    const { animal, city, state, breed } = queryKey[1];

    const res = await fetch(
        `http://localhost:3000/pets?animal=${animal}&city=${city}&state=${state}&breed=${breed}`
    );

    if (!res.ok) {
        throw new Error(
            `http://localhost:3000/pets?animal=${animal}&city=${city}&state=${state}&breed=${breed}`
        );
    }

    return res.json();
};

export default fetchSearch;
