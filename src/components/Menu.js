import {useUser} from "../contex"
    
const Menu = () => {
    const {username, logIn} = useUser();
    return (
        <div>
            <h3>Username:{username}</h3>
            <button onClick={()=>logIn("John")}>Login John</button>
        </div>
    )
}
export default Menu;