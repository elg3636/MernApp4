import React, { useEffect } from 'react'
import '../styling/result.css'
import { Link } from 'react-router-dom';



import { useDispatch, useSelector } from 'react-redux';
import {  earnPoints_Number, flagResult } from '../helper/helper';
import { usePublishResult } from '../hooks/setResult';


export default function Result() {
    const dispatch =useDispatch()
    const {questions : {queue, answers}, result: {result, userId}} = useSelector(state => state)

   

    const totalPoints= queue.length*10; /** each question has 10 points */
    const earnPoints = earnPoints_Number(result, answers,10) /** function to get earned points from helper function */
    const flag =flagResult(totalPoints, earnPoints) /** pass or fail flag  */
    
    /**store user result in an object*/
    usePublishResult({result, username : userId, points: earnPoints, achieved : flag? "Passed" : "Failed"})
   

/** display user results to user*/
  return (
    <div className='container'>
        <h1 className= 'title text-light'> Hundenshus Exam</h1>
        <div className='result flex-center'>
            <div className='flex'>
                <span>Name: </span>
                <span className='bold'>{userId || ""}</span>

            </div>
            <div className='flex'>
                <span>Earned points: </span>
                <span className='bold'>{earnPoints || 0}</span>

            </div>
            <div className='flex'>
                <span>Maximum points: </span>
                <span className='bold'>{totalPoints || 0}</span>

            </div>
            <div className='flex'>
                <span>Total questions: </span>
                <span className='bold'>{queue.length || 0}</span>

            </div>
            <div className='flex'>
                <span>Result: </span>
                <span style={{color : `${flag ? "#2aff95" : "#ff2a66" }`}}className='bold'>{flag ? "Passed" : "Failed"}</span>

            </div>
        </div>
        <div className='flex'> You can now exit the exam by closing your tab</div>
    </div>
  )
}




