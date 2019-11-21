import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/list/main.css';

import GoogleKeys from '../../../../keys/googleCalendar'

const Calendar = props => {
  return(
    <FullCalendar
      defaultView='dayGridMonth'
      plugins={[ dayGridPlugin, listPlugin, googleCalendarPlugin ]}
      header={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listYear'
      }}
      googleCalendarApiKey={GoogleKeys.googleCalendarApiKey}
      events={{ googleCalendarId: GoogleKeys.googleCalendarId }}
      eventClick={(arg) => {
        window.open(arg.event.url, '_blank', 'width=700, height=600')
        arg.jsEvent.preventDefault();
      }}
    />
  )
}

export default Calendar