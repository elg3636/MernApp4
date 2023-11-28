import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';

/** redux store import */

import {useSelector, useDispatch} from 'react-redux'
import { PushAnswer } from '../hooks/setResult';

/** to navigate user to differnt page */
import { Navigate} from 'react-router-dom'



export default function Quiz() {
    const [check, setCheck] =useState(undefined)
    
    /** hooks */
    const result = useSelector(state => state.result.result);
    const { queue, trace} = useSelector(state => state.questions);
    const dispatch = useDispatch()
   
    /** Next button to move to next question */
    function onNext(){
        if(trace < queue.length){
            /** update trace value in question reducer by one using move next action  */
            dispatch(MoveNextQuestion());

            /** insert new result */
            if(result.length <= trace){
                dispatch(PushAnswer(check))
            }
        }
        
    }
     
    /** Previous button to move to previous question but not for the first question as there is no previous question*/
    function onPrevious(){
        if(trace > 0){
            /** update trace value in question reducer by one using move previous action */
            dispatch(MovePrevQuestion());
        }
    }
    /** function for radio button selections */

    function onChecked(check){
        setCheck(check)
    }

    /** go to results page after last question*/
    if(result.length && result.length >= queue.length){
        return <Navigate to={'/result'} replace={true}></Navigate>
    }

  return (
    <div className='container'>
        <h1 className= 'title text-light'> Hundenshus Exam</h1>
        {/* questions*/}
        <Questions  onChecked= {onChecked}/>

        <div className='grid'>
            {/** do not display previous button on first question */}
            {trace > 0?  <button className='btn' onClick={onPrevious}>Previous</button> : <div></div>}
            <button className='btn' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}
