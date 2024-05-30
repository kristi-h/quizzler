import React from 'react'
import { getQuestions } from '../api'
import { useLoaderData } from 'react-router-dom'
import { Question } from "../components/Question"

export async function loader({request}){
    return await getQuestions()
}

export default function Questions() {
    const questions = useLoaderData()
    const [question, setQuestion] = React.useState({
        question: "",
        correct_answer: "",
        incorrect_answers: [],
        isAnswered: false,
        isCorrect: false,
        selected: ""
    })

    function randomize_mc(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        
        return array;
        }
    
    function checkAnswers(){
        if (question.selected === question.correct_answer) {
            setQuestion(prev=>({
                ...prev,
                isCorrect: !prev
            }))
        }
    }
    
    return(
        <div>
            <h3>Questions</h3>
            < Question 
                questions={props.questions}
            />
        </div>
    
)
}