import React from "react"

export default function Question(props) {
    return(
        props.questions.results.map(({question, correct_answer, incorrect_answers}, i) => {
              return (
                <div key={i}>
                    <div>
                        {question}
                    </div>
                    <div>
                        <p>correct: {correct_answer}</p>
                    </div>
                    {
                      const mc = {incorrect_answers}.push(correct)
                      const randomized = randomize_mc(mc)
                        randomized.map((answer,index) => ({
                            <div key={index}>
                                <p>{answer}</p>
                            </div>
                        })
                        )
                    }
                </div>
               )
            })
    )
}