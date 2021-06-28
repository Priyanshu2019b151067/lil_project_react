import './cards.styles.css'
const Card = (props) => {
    return ( 
        <div className="card-container">
            <img src={`https://robohash.org/${props.friend.id}?set=set2&size=180x180`} alt="" />
            <h1>{props.friend.name}</h1>
            <h2>{props.friend.email}</h2>
        </div>
     );
}
 
export default Card;