import React from 'react'
import UserContext from './UserContext'

const UserContextProvider=({children})=>{
    const [user,setuser]=React.useState(null);

    return(
        <UserContext.Provider value={{user,setuser}}>
            {children}  {/*all chidren wrpped up in UserContextProvider are aware of data provided to it */}
        </UserContext.Provider>
    )

}
export default UserContextProvider;