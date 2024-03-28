const App = () => {
  const course = 'Half Stack application development'

  // const content = [
  //   { part: 'Fundamentals of React', exercise: 10 },
  //   { part: 'Using props to pass data', exercise: 7 },
  //   { part: 'State of a component', exercise: 14 }
  // ]

  // const totalExercises = content.reduce((total, item) => total + item.exercise, 0);

  const parts = [
  {
    name:"Fundamentals of React",
    exercise: 10
  },
  {
    name: "Using props to pass data", 
    exercise: 7
  },
  {
    name: "State of a component",
    exercise: 14
  }
  ]

  return (
    <div>
     <Header course={course} />
     {/* {content.map((item, index) => (
        <Content key={index} part={item.part} exercise={item.exercise} />
      ))} */}
      <Content parts = {parts}/>
    {/* <Total total={totalExercises} /> */}
    <Total total = {parts[0].exercise + parts[1].exercise + parts[2].exercise} />
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
  console.log("Content: " + props.name + " and " + props.exercise)
  return(
  <div>
    <Part name = {props.parts[0].name} exercise = {props.parts[0].exercise} />
    <Part name = {props.parts[1].name} exercise = {props.parts[1].exercise} />
    <Part name = {props.parts[2].name} exercise = {props.parts[2].exercise} />
  </div>
  )
}

const Part = (props) => {
  return(
  <p>Name: {props.name} Excercise: {props.exercise}</p>
  )
}

const Total = (props) => {
  console.log("Total: " + props.total)
  return(
    <p>Total: {props.total}</p>
  )
}

export default App