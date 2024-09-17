import Content from './components/Content'
import Header from './components/Header'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 1
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