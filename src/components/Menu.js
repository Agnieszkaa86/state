import {useUser} from "../contex"
    
const Menu = () => {
    const {username, logIn,logOut} = useUser();
    return (
        <div>
            <h3>Username:{username ? username : "guest"}</h3>
            {username ? (<button onClick={logOut}>LogOut</button>) : (
               <button onClick={()=>logIn("John")}>Login John</button> 
            )}
            
        </div>
    )
}
export default Menu;