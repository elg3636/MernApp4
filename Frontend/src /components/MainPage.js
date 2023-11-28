/** component for main page */

import React, { useRef} from 'react'
import { Link} from 'react-router-dom'
import '../styling/MainPage.css'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/result_reducer'

/** represents main component of the app */
export default function Main() {
    const inputRef= useRef(null) /** for input for username box */
    const dispatch = useDispatch()

    /** function to start quiz only when user name is given */
    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))

        }
    }

/** instructions for students taking the exam, input for username and start button to start exam using link */
  return (
    <div className='container'>
        <h1 className= 'title text-light '> Hundenshus Exam</h1>
         
        <ol>
            <li> The exam contains 10 questions</li>
            <li> Each question is worth 10 points in total</li>
            <li> You need 60 points in order to pass the exam</li>
            <li> You will have 1 attempt </li>
            <li> You can review and change your answers before you submit your quiz</li>
            <li> Please take the exam individually</li>
            <li> No books or notes are allowed on your desk </li>
            <li> You must answer all the questions before you submit </li>
            <li> Once you have submitted the exam, you may exit the window</li>
        </ol>


        <div className='title text-light '> Good luck!</div>

        <form id="form">
            <input ref={inputRef} className="userId" type="text" placeholder='Enter your name*' />
        </form>


        <div className = 'start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Exam</Link> {/** on click event */}

        </div>
    </div>
  )
}

