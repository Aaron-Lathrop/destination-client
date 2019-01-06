import { logout } from '../actions/index';
import { connect } from 'react-redux';

function Logout(props) {
    props.dispatch(logout());
    props.history.push('/');

    return null;
}

export default connect()(Logout);