const App = () => {
  const course = 'Half Stack application development'

  // const content = [
  //   { part: 'Fundamentals of React', exercise: 10 },
  //   { part: 'Using props to pass data', exercise: 7 },
  //   { part: 'State of a component', exercise: 14 }
  // ]

  // const totalExercises = content.reduce((total, item) => total + item.exercise, 0);

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
      <Content name={[part1.name, part2.name, part3.name]} 
              exercise={[part1.exercise, part2.exercise, part3.exercise]} />
    {/* <Total total={totalExercises} /> */}
    <Total total = {part1.exercise + part2.exercise + part3.exercise} />
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
    <Part name = {props.name[0]} exercise = {props.exercise[0]}/>
    <Part name = {props.name[1]} exercise = {props.exercise[1]}/>
    <Part name = {props.name[2]} exercise = {props.exercise[2]}/>

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