import React from 'react'
import {
  Container,
  Segment,
  Header,
  Grid,
  Image,
} from 'semantic-ui-react'

const Home = props => {
  return (
    <Container>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Welcome to The Math Board Project!
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                We provide instructors and students with an intuitive
                one-on-one tutoring platform.
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Login or Sign Up Today!
              </Header>
              <p style={{ fontSize: '1.33em', marginBottom: '2em' }}>
                Your collaborative whiteboard session is just a few clicks away.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image rounded size='large' src='home_image.jpg' centered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  )
}

export default Home
