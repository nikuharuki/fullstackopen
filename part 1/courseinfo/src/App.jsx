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
     {content.map((item, index) => (
        <Content key={index} part={item.part} exercise={item.exercise} />
      ))}
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
   <p>Part: {props.part} Exercise: {props.exercise}</p>
  )
}

const Total = (props) => {
  console.log("Total: " + props.total)
  return(
    <p>Total: {props.total}</p>
  )
}

export default App
