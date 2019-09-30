import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Container } from 'semantic-ui-react'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'

const Calendar = props => {
    return (
        <Container  style={{marginTop: '8em'}}>
            <FullCalendar 
                defaultView='dayGridMonth'
                plugins={[ dayGridPlugin ]}
            />
        </Container>
    )
}

export default Calendar
