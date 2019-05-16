import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getUserLoginStatus} from '../../selectors/generalSelector'

const Landing = ({isUserLoggedIn}) => (
    <div>
        {isUserLoggedIn ? <Redirect to='/dashboard'/> : <Redirect to="/login"/>}
    </div>
);

const mapStateToProps = state => {
    return {
        isUserLoggedIn: getUserLoginStatus(state)
    }
};
export default connect(mapStateToProps, null)(Landing);