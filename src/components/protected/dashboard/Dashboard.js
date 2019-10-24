import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Container, Divider, Button, Header
} from 'semantic-ui-react'

import Calendar from './calendar/Calendar'

const Dashboard = (props) => {
  const userName = props.auth.user.name
  const userRole = props.auth.user.role
  return (
    <Container style={{ marginTop: '8em', marginBottom: '4em' }}>
      <h1>Welcome, {userName} ({userRole})!</h1>
      <Divider hidden />
      <Calendar />
      <Divider hidden />
      <Header as='h3'>Your Scheduled Sessions:</Header>
      <span>September 1, 2019 : 6:45 p.m. </span>
      <Button as={Link} to='/session' primary size='large' floated='right'>Go to Session</Button> 
    </Container>
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
