
const Star = 'Images/Star.png'


export default function Card(props) {
    let bageText;
    if (props.openSpots === 0){
        bageText = "SOUL OUT"
    }else if (props.location === 'Online'){
        bageText = 'ONLINE'
    }
    return (
            <div className='card-item'>
                { bageText && <div className="card-sold-out">{bageText}</div>}
                <img src={props.coverImg} className='card-image' alt="Card-pic"></img>
                <div className='card-stats'>
                    <img src={Star} className='card-star' alt="Card-Star"></img>
                    <span>{props.stats.rating}</span>
                    <span> {props.stats.reviewCount} </span>
                    <span>-{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><span className='bold'>From {props.price}$</span> / person</p>
            </div>


    )
}