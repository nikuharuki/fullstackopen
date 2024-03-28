const App = () => {
  
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }

  return (
    <div>
     <Header course ={course.name} />
     <Content parts = {course.parts}/>
     <Total parts = {course.parts} />
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
  console.log("Content: " + props.parts[0].name + " and " + props.parts[0].exercise)
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
  return(
    <p>Total: {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
  )
}

export default App