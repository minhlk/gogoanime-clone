import './Item.css';
import {Link} from "react-router-dom";

function Item({anime}) {
    return (
       
            <div className="Image-container">
            <div className="Container">
                <div className="Cover-container">
                    <img className="Cover"src={anime.image} alt={anime.title}/>
                    <div className="Title">
                        <Link className="Link" to={{ pathname: '/Detail',  state: { url: anime.link }}}>
                             <p>{anime.title}</p>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
      
    )
}

export default Item;