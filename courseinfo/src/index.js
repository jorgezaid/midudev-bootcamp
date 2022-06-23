import React from 'react'
import ReactDOM from 'react-dom'

//const Title = ({course}) => <h1>{course}</h1>

const Title = ({course}) => {
  return <h1>{course}</h1>
}

//const lo =({msg1},{result}) => <p>{msg1}{}<p/>

const Parrafo = (props) => {
  return <p>{props.msg1} {props.result}</p>
}

const Final = (props) => {
  const suma = props.exercises1 + props.exercises2 + props.exercises3
  return <p>{props.texto} {props.suma}</p>
}

const App = () => {
  const courses = 'Half Stack application development'
  const part1 = '1Fundamentals of React'
  const exercises1 = 10
  const part2 = '2Using props to pass data'
  const exercises2 = 7
  const part3 = '3State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={courses} />
      <Parrafo msg1={part1} result={exercises1}/>
      <Parrafo msg1={part2} result={exercises2}/>
      <Parrafo msg1={part3} result={exercises3}/>
      <Final texto={'Number of exercises'} val1={exercises1} val2={exercises2} val3={exercises3} />
       
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))