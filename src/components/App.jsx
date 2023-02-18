// import Button from "./Button";
// import Counter from "./Counter";
// const something = () => {
//    console.log("something")
//  }

// const App = () => {
//   <>
//     <h1>Hello from App</h1>
//     <Counter initialValue={1} step={10} />
//     <Button label="Go from App" onClickAction={something} />
//   </>
// }

// export default App;
import MyForm from "./MyForm";

const App = () => (
  <>
    <h>React Form</h>
    <MyForm label="Nasz Formularz" formSubmissionHandler={(data) => {
      console.log(">>>>App is calling!!!", data)
    }} />
  </>
)
export default App;

