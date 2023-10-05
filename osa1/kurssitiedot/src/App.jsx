const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  const { parts } = props;
  console.log(props);
  return (
      <p>{parts.name} {parts.exercises}</p>
  )
}

const Content = (props) => {
  const { parts } = props;
  return (
    <div>
      <Part parts={parts[0]} />
      <Part parts={parts[1]} />
      <Part parts={parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const { parts } = props;
  const totalExercises = parts.reduce(
    (total, part) => total + part.exercises, 0
  );
console.log(props);
  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} /> 
      <Total parts={course.parts} />
    </div>
  )
}

export default App