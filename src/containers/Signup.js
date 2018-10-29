import { connect } from 'react-redux';
import Signup from '../components/signup/Signup'


const mapStateToProps = (state) => {
  return {
    employees: state.employees
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEmployee: (employee) => {
      dispatch((dispatch) => {
        setTimeout(() => {
          dispatch({
            type: "ADD_EMPLOYEE",
            payload: {
              value: employee,
            }
          })
        }, 2000);
      })
    },
    deleteEmployee: (index) => {
      return dispatch({
        type: "DELETE_EMPLOYEE",
        payload: {
          value: index
        }
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);