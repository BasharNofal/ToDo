import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth';
import { If } from 'react-if'
function Acl(props) {
    let okToRender = false;
    const authContext = useContext(AuthContext);

    try {
        okToRender = authContext.loggedIn && props.capability ? authContext.user.capabilities.includes(props.capability) : false;
    } catch (error) {
        console.log('NOT AUTHORIZED', error.message)
    }

    return (
        <If condition={okToRender}>
            {props.children}
        </If>
    )
}

export default Acl;