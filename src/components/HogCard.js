import React, {useState} from "react";

function HogCard({hogData}){
    const {
        greased, 
        'highest medal achieved': highestMedalAchieved, 
        image, 
        name, 
        specialty, 
        weight} = hogData;

    const [isShowingExtraDetails, setIsShowingExtraDetails] = useState(false);

// console.log(hogData)

    function handleCardClick(){
        setIsShowingExtraDetails(!isShowingExtraDetails)
    }

    return (
        <div onClick={handleCardClick}>
            <h3>{name}</h3>
            <img src={image} alt={name}></img>
            {isShowingExtraDetails ? (
                <div>
                    <p>specialty: {specialty}</p>
                    <p>weight: {weight}</p>
                    <p>greased: {greased ? "This pig is greasy": "This pig is not greasy "}</p>
                    <p>highest medal achieved: {highestMedalAchieved}</p>
                </div>
            ): null}
        </div>
    )
}

export default HogCard