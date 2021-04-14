import React, {useState} from "react";
import cl from "./pagination.module.css";
//import style from  '../../components/TemplateSettings/ThemeChange.module.css';
import {useSelector} from "react-redux";

type propsType = {
    countItems: number
    // pagesSize: number
    currentPage: number
   // onPageChanged: (currentPage: number) => void
}
export const Pagination = (props: propsType) => {
    const defoultPageSize = 5
    let countPages = Math.ceil(props.countItems / defoultPageSize);
    let pages = [];
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(countPages/defoultPageSize);
    let [portionNumber,setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber-1)*defoultPageSize+1;
    let rightPortionNumber = portionNumber*defoultPageSize;
    const onPageChanged = (currentPage: number) => {
        // getUsersTC(currentPage, pagesSize)
    }
    let somePagesCount = pages.filter(p=> p >= leftPortionNumber && p <= rightPortionNumber).map(p => {
        return <span className={p === props.currentPage ? `${['Pag']} ${cl.currentPage}` : `${['Pag']} ${cl.ollPage}`}
                     onClick={(e) => { onPageChanged(p)}}> {p}</span>
    })
    const onChangePrev = ()=>{
        setPortionNumber(portionNumber - 1)
    }
    const onChangeNext = ()=>{
        setPortionNumber(portionNumber + 1)
    }
    return (
        <div className={cl.default}>
            {portionNumber >1 && <button onClick={onChangePrev}>prev</button>}
            {somePagesCount}
            {portionCount > portionNumber &&<button onClick={onChangeNext}>next</button>}
        </div>
    )
}