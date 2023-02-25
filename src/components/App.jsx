// import { useRef, useEffect} from "react";
 
import Menu from "./Menu";
import Player from "./Player";
// import RegisterUser from "./RegisterUser";

function App() {
  // const myButtonRef = useRef();
  // const myInputRef = useRef("hello world");

  
  // console.log("myButtonRef", myButtonRef);
  
  // useEffect(() => {
  //   myButtonRef.current.addEventListener("click", () => {
  //   console.log("my button clicked")
  // })
  // })

  
  
  return (
    <div>
      <Menu />
      <hr />
      <h1>Hello</h1>
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
    </div>
  )
}
export default App;