import SingleCard from "../single-card/SingleCard";
import { useState } from "react";
import '../../../global.css';
function GamePage()
{
 
        
    const[cards, setCards] = useState([
     
        {id:1,img:'./images/angular.png',stat: ""},
        {id:1,img:'./images/angular.png',stat: ""},
        {id:2,img:'./images/css.png',stat: ""},
        {id:2,img:'./images/css.png',stat: ""},
        {id:3,img:'./images/html.png',stat: ""},
        {id:3,img:'./images/html.png',stat: ""},
        {id:4,img:'./images/js.png',stat: ""},
        {id:4,img:'./images/js.png',stat: ""},
        {id:5,img:'./images/nodejs.png',stat: ""},
        {id:5,img:'./images/nodejs.png',stat: ""},
        {id:6,img:'./images/react.png',stat: ""},
        {id:6,img:'./images/react.png',stat: ""},
        {id:7,img:'./images/scss.png',stat: ""},
        {id:7,img:'./images/scss.png',stat: ""},
        {id:8,img:'./images/vue.png',stat: ""},
        {id:8,img:'./images/vue.png',stat: ""},
    ].sort(() => Math.random() - 0.5))


    return(
        <div className="main-container">
           {cards.map((item,index) => (
            <SingleCard keys={index} item = {item}/>
           ))}
        </div>
    )
}
export default GamePage;