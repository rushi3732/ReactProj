import React from 'react';

import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    //ReactSession.removeItem('userData');
    const data = ReactSession.get("userData");
    if (data) {
        //const localStorage = ReactSession.setStoreType("localStorage");

        ReactSession.setStoreType("localStorage").removeItem('userData')

        navigate('/login')
    }


    return (
        <> {navigate('/login')}</>
    )
}
export default Logout;