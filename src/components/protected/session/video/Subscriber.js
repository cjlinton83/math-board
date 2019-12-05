    import React from 'react';
    import { OTSubscriber } from 'opentok-react';
    import CheckBox from './CheckBox';
    import {
        Button,
        Label,
        Icon,
        Segment
    } from 'semantic-ui-react'

    const styles = {
        segment: {
            width: '28em',
        }
    }
    class Subscriber extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                error: null,
                audio: true,
                video: true
            };
        }

        setAudio = (audio) => {
            this.setState({ audio });
        }

        setVideo = (video) => {
            this.setState({ video });
        }

        onError = (err) => {
            this.setState({ error: `Failed to subscribe: ${err.message}` });
        }

        render() {
            return (
                <div className="subscriber">
                    <h1>Not You</h1>
                    {this.state.error ? <div id="error">{this.state.error}</div> : null}
                    <Segment style={styles.segment}>
                        <OTSubscriber
                            properties={{
                                subscribeToAudio: this.state.audio,
                                subscribeToVideo: this.state.video
                            }}
                            onError={this.onError}
                        />
                        {/* <CheckBox
                        label="Show Screen-Share "
                        onChange={this.changeVideoSource}
                    /> */}
                        <CheckBox
                            label="Connect Their Voice "
                            initialChecked={this.state.audio}
                            onChange={this.setAudio}
                        />
                        <CheckBox
                            label="Show Their Video "
                            initialChecked={this.state.video}
                            onChange={this.setVideo}
                        />
                    </Segment>

                </div>
            );
        }
    }
    export default Subscriber;