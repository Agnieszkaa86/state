import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [student, setStudent] = useState({ name: "john", age: 25 });
  const incrementCount = () => {
    setCount(count + 1)
  }
  const updateStudentDaata = () => {
    setStudent({
      ...student,
      name:"Sarah",
    })
  }

  console.log(useState)
  return (
    <div>
      <h1>HOOKS-count:{count}</h1>
      <h2>Student:{student.name},age:{student.age}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={updateStudentDaata}>Update student</button>
    </div>
  )
}
export default App;