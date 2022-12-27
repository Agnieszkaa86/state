import MyForm from "./MyForm";


const App = () => (
  <>
    <h1>React Forms!!!!</h1>
    <MyForm label="Nasz formularz" formSubmissionHandler={(data) => {
      console.log(">>> App Is Calling!!", data)
    }} />
  </>
)

export default App;
