import React from 'react'
import {
    Button,
    Icon,
    Segment
} from 'semantic-ui-react'
import NotificationBadge from 'react-notification-badge'


import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import ConnectionStatus from './ConnectionStatus';
import Publisher from './Publisher';
import Subscriber from './Subscriber';
import './video.css';


const styles = {
    vieoRoot: {
        position: 'absolute',
        bottom: '1em',
        right: '20em',
        float: 'right',
        zIndex: 20
    },
    videoOpenButton: {
        position: 'absolute',
        right: '12em',
        bottom: '12px',
        float: 'right',
    },
    // videOpenDiv: {
    //     position: 'absolute',
    //     right: '0em',
    //     top: '4em',
    //     width: '30em'
    // },
}
class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            connected: false,
            isOpen: false
        };
        this.sessionEvents = {
            sessionConnected: () => {
                this.setState({ connected: true });
            },
            sessionDisconnected: () => {
                this.setState({ connected: false });
            }
        };
    };

    onError = (err) => {
        this.setState({ error: `Failed to connect: ${err.message}` });
    }


    render() {
        // const { isOpen } = this.props
        // function { setIsOpen } = this.props
        return (
            <div style={styles.videoRoot}>
                {this.state.isOpen ?
                    <div style={styles.videoOpenDiv}>
                        <OTSession
                            apiKey={this.props.apiKey}
                            sessionId={this.props.sessionId}
                            token={this.props.token}
                            eventHandlers={this.sessionEvents}
                            onError={this.onError}
                        >
                            {this.state.error ? <div id="error">{this.state.error}</div> : null}
                            <ConnectionStatus connected={this.state.connected} />
                            <Publisher />
                            <OTStreams>
                                <Subscriber />
                            </OTStreams>
                        </OTSession>
                    </div>
                    : null
                }

                <Button
                    icon
                    labelPosition='left'
                    size='big'
                    style={styles.videoOpenButton}
                    onClick={() => {
                        this.setState({
                            isOpen: !this.state.isOpen
                        })
                    }}
                >
                    <Icon name='video' />
                    {this.state.isOpen ? 'Close Video' : 'Open Video'}
                </Button>

                {/* <OTSession
                    apiKey={this.props.apiKey}
                    sessionId={this.props.sessionId}
                    token={this.props.token}
                    eventHandlers={this.sessionEvents}
                    onError={this.onError}
                >
                    {this.state.error ? <div id="error">{this.state.error}</div> : null}
                    <ConnectionStatus connected={this.state.connected} />
                    <Publisher />
                    <OTStreams>
                        <Subscriber />
                    </OTStreams>
                </OTSession> */}
            </div>
        );
    }
}
export default preloadScript(Video);

