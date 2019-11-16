import React from 'react'
import {
  Header,
  Grid,
  Image,
} from 'semantic-ui-react'

const styles = {
  grid: {
    marginTop: '8em'
  },
  header: {
    fontSize: '2em'
  },
  headerP: {
    fontSize: '1.33em'
  }
}

const Landing = () => {
  return (
    <Grid container verticalAlign='middle' style={styles.grid}>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h3' style={styles.header}>
            Welcome to The Math Board Project!
          </Header>
          <p style={styles.headerP}>
            We provide instructors and students with an intuitive
            one-on-one tutoring platform.
          </p>
          <Header as='h3' style={styles.header}>
            Login or Sign Up Today!
          </Header>
          <p style={styles.headerP}>
            Your collaborative whiteboard session is just a few clicks away.
          </p>
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
          <Image 
            rounded
            size='large'
            src='home_image.jpg'
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Landing
