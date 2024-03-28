// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// Remove the unused import statement
// import React from "react"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name = "Maya" age = {26 + 10}/>
//       <Hello name = {name} age = {age}/>
//     </div>
//   )
// }


// export default App

// -----

const App = () => {
  const course = 'Half Stack application development'

  const content = [
    { part: 'Fundamentals of React', exercise: 10 },
    { part: 'Using props to pass data', exercise: 7 },
    { part: 'State of a component', exercise: 14 }
  ]

  const totalExercises = content.reduce((total, item) => total + item.exercise, 0);

  return (
    <div>
     <Header course={course} />
     {/* {content.map((item, index) => (
        <Content key={index} part={item.part} exercise={item.exercise} />
      ))} */}
      <Content content={content} />
    <Total total={totalExercises} />
    </div>
  )
}

const Header = (props) => {
  console.log("Header: " + props.course)
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log("Content: " + props.part + " and " + props.exercise)
  return(
  <div>
    <Part part = {props.content[0].part} exercise = {props.content[0].exercise}/>
    <Part part = {props.content[1].part} exercise = {props.content[1].exercise}/>
    <Part part = {props.content[2].part} exercise = {props.content[2].exercise}/>

  </div>
  )
}

const Part = (props) => {
  return(
  <p>Name: {props.part} Excercise: {props.exercise}</p>
  )
}

const Total = (props) => {
  console.log("Total: " + props.total)
  return(
    <p>Total: {props.total}</p>
  )
}

export default App