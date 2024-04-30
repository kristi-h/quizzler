import React from 'react'
import { getQuestions } from '../api'
import { useLoaderData } from 'react-router-dom'

export async function loader({request}){
    console.log(request)
    return await getQuestions()
}

export default function Questions() {
    const questions = useLoaderData()
    console.log(questions)

    //const questionEle = questions.map(question => (
     //   <div key={question}>
       //     <h3>{question}</h3>
        //</div>
    //))

    return(
        <div>
            <h3>Questions</h3>
            {questions}
        </div>
        
    )
}