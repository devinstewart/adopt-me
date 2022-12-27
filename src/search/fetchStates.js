const fetchStates = async () => {
    const apiRes = await fetch(`http://localhost:3000/states`);

    if (!apiRes.ok) {
        throw new Error(`http://localhost:3000/states failed`);
    }

    return apiRes.json();
};

export default fetchStates;
