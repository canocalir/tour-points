import "./Card.scss";

const Card = ({ tourplaces }) => {
  return (
    <div className="cards">
      {tourplaces.map((place, id) => (
        <div className="card-container" key={id}>
          <h2 className="title">{place.title}</h2>
            <img className="image" src={place.image} alt={id} />
            <div className="image-info">
                <p>{place.desc}</p>
            </div>
          </div>
      ))}
    </div>
  );
};

export default Card;
