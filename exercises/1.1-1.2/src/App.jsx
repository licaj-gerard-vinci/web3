const Header = (props) => {
  return ( 
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (content) => {
  return(
    <div>
      <Part number={content.part} content={content.exercise}/>
    </div>
  )
}

const Part = (part) => {
  return(
    <p>{part.number} {part.content}</p>
  )
}

const Total = (total) => {
  return(
    <p>{total.number}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <p>
      <Content part={part1} exercise={exercises1}/>
      </p>
      <Total number={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App