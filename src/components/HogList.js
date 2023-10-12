import React, {useState} from "react";
import FilterHogs from "./FilterHogs";
import HogCard from "./HogCard";

import hogs from "../porkers_data";

function HogList(){
    const [isShowingJustGreasies, setIsShowingJustGreasies] = useState(false);
    const [sortBy, setSortBy] = useState('select')


    const filteredGreasies = hogs.filter((hog)=>{
        if(isShowingJustGreasies){
            return hog.greased
        } else {
            return true
        }
    })

    const sortedHogs = filteredGreasies.sort((hogA, hogB)=>{
        if(sortBy==='name'){
            return hogA.name.localeCompare(hogB.name)
        } else {
            return hogA.weight - hogB.weight
        }
    })

    const hogCards = sortedHogs.map((hog)=>{
        return <HogCard key={hog.name} hogData={hog}/>
    })

    function handleGreasyChange(e){
        console.log('I was checked')
        setIsShowingJustGreasies(!isShowingJustGreasies)
    }

    function handleSortBy(nameOrWeight){

        if(nameOrWeight==='name'){
            setSortBy('name')
        } else if(nameOrWeight==='weight'){
            setSortBy('weight')
        } else {
            setSortBy('select')
        }
    }
   
    return(
        <div>
            <FilterHogs 
                isShowingGreasies={isShowingJustGreasies} 
                setIsShowingGreasies={setIsShowingJustGreasies}
                onHandleGreasyChange={handleGreasyChange}
                onHandleDropdownChange={handleSortBy}
                />
            {hogCards}
        </div>
    )
}

export default HogList