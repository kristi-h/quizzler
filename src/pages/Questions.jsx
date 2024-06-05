import React from 'react'
import ReactDOM from 'react-dom';
import { getQuestions } from '../api'
import { useLoaderData } from 'react-router-dom'

export async function loader({request}){
    return await getQuestions()
}

export default function Questions() {
    const questions = useLoaderData()
    const [question, setQuestion] = React.useState({
        question: "",
        correct_answer: "",
        incorrect_answers: [],
        answer: "",
        isCorrect: false,
        answerOptions: []
    })

    const scrambleAnswers = (correct_answer) => {
        setQuestion(prev => {
            ...prev,
            answerOptions: incorrect_answers.push(correct_answer)
        })
        randomize_mc(answerOptions)
    }

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
    
    function handleSelected(e){
        const selected = e.target.value
        setQuestion({
            ...question, 
            answer: selected
        })
    }

    function checkAnswers(question){
        if (question.answer === question.correct_answer) {
            setQuestion({
                ...question,
                isCorrect: true
            })
        }
    }

    function showResults(){
        questions.map(question=>
            checkAnswers(question)
        )
    }
    
    return(
        <div>
            <h3>Questions</h3>
           
            {questions.results.map(i => (
                
                <div key={i}>
                    <div>
                        {question}
                    </div>
                    {
                    scrambleAnswers(correct_answer).map((answer,index) => (
                            <div key={index}>
                                <button onClick = {handleSelection} value={answer}>{answer}</button>
                            </div>
                        )
                        )
                    }
                </div>
               )
        )}
        </div>
    )
}
       
    
