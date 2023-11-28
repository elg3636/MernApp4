import React , { useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux' 
/** custom hook */
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'


/** function for quiz questions */
export default function Questions({onChecked}) {
    const [checked, setChecked]=useState(undefined)
    const {trace}= useSelector(state => state.questions);
    const result= useSelector(state => state.result.result);
    const [{ loading, apiData, serverError}] =useFetchQuestion()
    
   
    const questions= useSelector(state=> state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

    /** update result value action */
    useEffect(() => {
        dispatch(updateResult({trace, checked}));
    },[checked, dispatch, trace])

    /** function for radio button changes */
    function onSelect(i) {
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({trace, checked}));
    }
    if(loading) return <h3 className='text-light'>Loading</h3>
    if(serverError) return <h3 className='text-light'>{serverError.toString() || 'Unknown error'}</h3>
  return (
    
    <div className='questions'> {/** display questions and display the options using map function  */}
        <h2  className= 'text-light'>{questions?.question}</h2>
        <ul key={questions?.id}> {/** radio button options for questions */}
            {
                questions?.options.map((q, i) => (
                    <li key={i}> {/** uniquly identified to avoid react returning error */}
                        <input
                        type="radio"
                        value={false}
                        name="options"
                        id={`q${i}-option`}
                        onChange={()=> onSelect(i)}
                    />
                    <label className='text-primary' htmlFor={`q${i}-option`}> {q}</label>
                
                    <div className={`check ${result[trace] === i ? 'checked' :''}`}></div> {/** show user selected option */}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
