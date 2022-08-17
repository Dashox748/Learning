import {useAuth0} from "@auth0/auth0-react";
import JsonPretty from "react-json-pretty"


function Profile() {
    const {user,isAuthenticated} =useAuth0()
    return (
        <>
            {isAuthenticated ?  <JsonPretty data={user}/>  :null}
        </>
    );
}

export default Profile;
