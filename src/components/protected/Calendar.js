import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'

const Calendar = (props) => {
    return (
        <FullCalendar 
            defaultView='dayGridMonth'
            plugins={[ dayGridPlugin ]}
        />
    )
}

export default Calendar
