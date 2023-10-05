

const HistoricalPlace = ({item}) => {
    const {name , details , image} = item 
    return (
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <p className="text-lg  sm:text-2xl font-semibold my-2"> Name : {name}</p>
            <p className="mb-3">{details}</p>
        </div>
    );
};

export default HistoricalPlace;