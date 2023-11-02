import React, { useEffect, useState } from 'react'

const question = () => {
  const [question, setQuestion] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/question/123')
      .then((resp) => resp.json())
      .then(setQuestion)
  }, [])

  const renderResponses = () => {
    if (question) {
      return question.answers.map((response, i) => {
        return <li key={i}>{response}</li>
      })
    }

    return false
  }

  return (
    <div>
      <h1>question</h1>
      <div>
        <span>
          {' '}
          {question?.id} - {question?.statement}{' '}
        </span>
        <ul>{renderResponses()}</ul>
      </div>
    </div>
  )
}

export default question
