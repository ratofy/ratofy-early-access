import React, { useState } from 'react';
import UserContext from './userContext';

const UserState = (props) => {
    const [login, setLogin] = useState(false);
    return (
        <UserContext.Provider value={{ login, setLogin }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;
