import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

import GoogleKeys from '../../../../keys/googleCalendar'

const Calendar = props => {
  return(
    <FullCalendar
      defaultView='dayGridMonth'
      plugins={[ dayGridPlugin, googleCalendarPlugin ]}
      googleCalendarApiKey={GoogleKeys.googleCalendarApiKey}
      events={{ googleCalendarId: GoogleKeys.googleCalendarId }}
    />
  )
}

export default Calendar