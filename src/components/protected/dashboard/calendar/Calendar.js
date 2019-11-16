import React, { Component } from 'react'
import FullCalendar from "calendar";
import { addHours, addDays, addWeeks, startOfWeek } from "date-fns";
import { MDBContainer } from "mdbreact";

const today = new Date();

class App extends Component {
  state = {
    tasks: [
      {
        id: "task1",
        title: "Math Tournament",
        startDate: addHours(addDays(today, 0), 8),
        endDate: addHours(addDays(today, 2), 20),
        color: "danger"
      },
      {
        id: "task2",
        title: "Test week",
        startDate: addWeeks(today, 1),
        endDate: addDays(addWeeks(today, 1), 2),
        color: "success"
      },
      {
        id: "task3",
        title: "Feedback",
        startDate: addHours(addDays(startOfWeek(addWeeks(today, 0)), 3), 10),
        endDate: addHours(addDays(startOfWeek(addWeeks(today, 0)), 3), 14),
        color: "primary"
      },
      {
        id: "task4",
        title: "Daily coding challenge",
        startDate: addDays(startOfWeek(addWeeks(today, 0)), 1),
        endDate: addDays(startOfWeek(addWeeks(today, 0)), 8),
        color: "warning"
      },
      {
        id: "task5",
        title: "Meeting",
        startDate: addHours(addDays(startOfWeek(addWeeks(today, 1)), 1), 10),
        endDate: addHours(addDays(startOfWeek(addWeeks(today, 1)), 1), 14),
        color: "info"
      },
      {
        id: "task6",
        title: "Vacation",
        startDate: addDays(startOfWeek(addWeeks(today, 2)), 1),
        endDate: addDays(startOfWeek(addWeeks(today, 2)), 6),
        color: "secondary"
      }
    ]
  };

  render() {
    return (
      <MDBContainer className="my-5">
        <FullCalendar tasks={this.state.tasks} onChange={this.handleTasksUpdate}/>
      </MDBContainer>
    );
  }
}

export default App;