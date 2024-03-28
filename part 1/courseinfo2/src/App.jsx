

const App = () => {
  const course = 'Half Stack application development'

  const content = [
    { part: 'Fundamentals of React', exercise: 10 },
    { part: 'Using props to pass data', exercise: 7 },
    { part: 'State of a component', exercise: 14 }
  ]

  const totalExercises = content.reduce((total, item) => total + item.exercise, 0);

  const part1 = {
    name: "Fundamentals of React",
    exercise: 10
  }

  const part2 = {
    name: "Using props to pass data",
    exercise: 7
  }

  const part3 = {
    name: "State of a component",
    exercise: 14
  }

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