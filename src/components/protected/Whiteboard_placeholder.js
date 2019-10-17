import React from 'react'
import {
  Icon,
  Dropdown,
  Image,
  Popup,
  Button
} from 'semantic-ui-react'


import Chat from './chat/Chat'

// const HEIGHT_OFFSET = 64

const Whiteboard_placeholder = (props) => {
  // const canvas = React.createRef()
  // const [width, setWidth] = React.useState(window.innerWidth)
  // const [height, setHeight] = React.useState(window.innerHeight - HEIGHT_OFFSET)
  const [color, setColor] = React.useState('black')

  // React.useEffect(() => {
  
  //   function resizeEvent() {
  //     setWidth(window.innerWidth)
  //     setHeight(window.innerHeight - HEIGHT_OFFSET)
  //   }

  //   window.addEventListener('resize', resizeEvent)

  //   return function cleanup() {
  //     window.removeEventListener('resize', resizeEvent)
  //   }
  // })

  const UpperButtonGroup = () => {
    const penButton = (
      <Icon
        inverted
        color={color}
        circular
        bordered
        name='pencil alternate'
        size='big'
      />
    )

    const penOptions = [
      { key: 'pen-black', text: 'black', label: { color: 'black', empty: true, circular: true } },
      { key: 'pen-red', text: 'red', label: { color: 'red', empty: true, circular: true } },
      { key: 'pen-green', text: 'green', label: { color: 'green', empty: true, circular: true } },
      { key: 'pen-blue', text: 'blue', label: { color: 'blue', empty: true, circular: true } },
    ]

    return (
      <div style={{ position: 'relative', top: '5em', float: 'right' }}>
        <Dropdown trigger={penButton} icon={null}>
          <Dropdown.Menu>
            <Dropdown.Header>colors</Dropdown.Header>
            {
              penOptions.map((option) => (
                <Dropdown.Item
                  selected={color === option.key}
                  key={option.key}
                  onClick={setColor(option.key)}
                  {...option}
                />
              ))
            }
          </Dropdown.Menu>
        </Dropdown>
        <Icon circular bordered name='eraser' size='big' />
        <Icon circular bordered name='undo' size='big' />
        <Icon circular bordered name='redo' size='big' />
      </div>
    )
  }

  const LowerButtonGroup = () => {
    const HistoryPopUp = () => (
      <Image.Group>
        <Button compact icon='chevron left' />
        <Image src='./example.png' bordered />
        <Image src='./example.png' bordered />
        <Image src='./example.png' bordered />
        <Button compact icon='chevron right' />
      </Image.Group>
    )

    return (
      <div style={{ position: 'relative', bottom: '4em', float: 'right' }}>
        <Popup
          basic
          flowing
          on='click'
          trigger={
            <Button icon labelPosition='left' size='big'>
              <Icon name='history' />
              History
            </Button>
          }
          children={<HistoryPopUp />}
          style={{ height: '190px', width: '605px' }}
        />
        <Popup
          basic
          flowing
          on='click'
          trigger={
            <Button icon labelPosition='left' size='big'>
              <Icon name='comment alternate outline' />
              Messages
            </Button>
          }
          children={<Chat />}
          style={{ width: '40em' }}
        />
      </div>
    )
  }

  return (
    <div style={{ height: '100vh' }}>
      <UpperButtonGroup />
      {/* <canvas
        ref={canvas}
        width={width}
        height={height}
      /> */}
      <Image src='./large_example.png' style={{ paddingTop: '4em', height: '700px', zIndex: '-100' }}/>
      <LowerButtonGroup />
    </div>
  )
}

export default Whiteboard_placeholder
