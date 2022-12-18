import Counter from "../components/Counter";

const h1Styles = { color: "red", backgroundColor: "green" };
const App = () => (
  <>
    <h1 style={h1Styles}>Hello from App</h1>
    <Counter initialValue={0} step={1} />
  </>
);

export default App;
