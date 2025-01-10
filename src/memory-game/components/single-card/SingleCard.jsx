import { useState } from "react";
function SingleCard({item})
{

    return(
        <div className="card-contianer">
            <img src={item.img}/>
        </div>
    )
}
export default SingleCard;