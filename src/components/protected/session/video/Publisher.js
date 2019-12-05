import React from 'react';
import { OTPublisher } from 'opentok-react';
import CheckBox from './CheckBox';

import {
    Button,
    Icon,
    Segment
} from 'semantic-ui-react'
const styles = {
    segment: {
        width: '15em',
    }
}
class Publisher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            audio: true,
            video: true,
            videoSource: 'camera'
        };
    }
    setAudio = (audio) => {
        this.setState({ audio });
    }

    setVideo = (video) => {
        this.setState({ video });
    }

    changeVideoSource = (videoSource) => {
        (this.state.videoSource !== 'camera') ? this.setState({ videoSource: 'camera' }) : this.setState({ videoSource: 'screen' })
    }

    onError = (err) => {
        this.setState({ error: `Failed to publish: ${err.message}` });
    }

    render() {
        return (
            <div className="publisher">
                <h1>You</h1>

                {this.state.error ? <div id="error">{this.state.error}</div> : null}
                <Segment style={styles.segment}>
                    <OTPublisher
                        properties={{
                            publishAudio: this.state.audio,
                            publishVideo: this.state.video,
                            videoSource: this.state.videoSource === 'screen' ? 'screen' : undefined
                        }}
                        onError={this.onError}
                    />

                    <CheckBox
                        label="Share Your Screen"
                        onChange={this.changeVideoSource}
                    />
                    <CheckBox
                        label="Connect Your Voice"
                        initialChecked={this.state.audio}
                        onChange={this.setAudio}
                    />
                    <CheckBox
                        label="Connect Your Video"
                        initialChecked={this.state.video}
                        onChange={this.setVideo}
                    />
                </Segment>


            </div>
        );
    }
}
export default Publisher;