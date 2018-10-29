import { connect } from 'react-redux';
import Login from '../components/login/Login'


const mapStateToProps = (state) => {
  return {
    employees: state.employees
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginEmployee: (email, password) => {
      dispatch((dispatch) => {
        dispatch({
          type: "LOGIN_EMPLOYEE",
          payload: {
            email: email,
            password: password,
          }
        })
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);