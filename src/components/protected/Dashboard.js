import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Calendar from './Calendar'

const Dashboard = (props) => {
  const userName = props.auth.user.name
  const userRole = props.auth.user.role
  return (
    <div style={{ marginTop: '4em' }}>
      <h1>Welcome, {userName} ({userRole})!</h1>
      <Calendar />
    </div>
  )
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps
)(Dashboard)
