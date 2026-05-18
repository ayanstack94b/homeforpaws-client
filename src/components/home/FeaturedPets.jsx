

const FeaturedPets = async () => {
    const res = await fetch('http://localhost:5000/pet')
    const petsData = await (res).json()
    console.log(petsData);
    return (
        <div>
            FeaturedPets.jsx
        </div>
    );
};

export default FeaturedPets;