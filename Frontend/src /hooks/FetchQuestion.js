/** Custom hook */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";

/** redux actions */
import * as Action from '../redux/question_reducer';


/** Hook to get api data and set value to the store */
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ loading: false, apiData: [], serverError: null });

    /**useEffect(() => {
        const fetchData = async () => {
            try {
                setGetData(prev => ({ ...prev, loading: true }));
                const data = await getServerData('http://localhost:3000/api/questions');
                if (data && data.questions && data.questions.length > 0) {
                    const { questions, answers } = data;
                    setGetData(prev => ({ ...prev, loading: false, apiData: questions }));
                    dispatch(Action.startExamAction({ question: questions, answers }));
                } else {
                    throw new Error("No Question available");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, loading: false, serverError: error }));
            }
        };

        fetchData();
    }, [dispatch]);*/

    useEffect(() => {
        setGetData(prev => ({...prev, loading : true}));

        /** function to get the data from the backend */
        (async () => {
            try {
                const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
                
                if(questions.length > 0){
                    setGetData(prev => ({...prev, loading : false}));
                    setGetData(prev => ({...prev, apiData : questions}));

                    /** dispatch an action to start exam */
                    dispatch(Action.startExamAction({ question : questions, answers }))

                } else{
                    throw new Error("No Question available");
                }
            } catch (error) {
                setGetData(prev => ({...prev, loading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]); /** dispatch so that use effect does not continuously load */



    return [getData, setGetData];
};

/** function to return dispatch function for move action */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); // increase trace by 1
    } catch (error) {
        console.log(error);
    }
};

/** function to return dispatch function for previous action */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); // decrease trace by 1
    } catch (error) {
        console.log(error);
    }
};







