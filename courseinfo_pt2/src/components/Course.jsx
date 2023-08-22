const Header = ({ course }) => <h1>{course.name}</h1>
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>
const Content = ({ parts }) => 
  <>
      {parts.map(p => <Part key={p.id} part={p} />)}
  </>

const Total = ({course}) => {
    let t = course.reduce((s, q) => s + q.exercises,0)
    return(
        <h3>
            total of {t} exercises
        </h3>
    )
}
const Course = ({course}) => {
  return(
    <>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total course={course.parts} />
    </>
  )
}

export default Course