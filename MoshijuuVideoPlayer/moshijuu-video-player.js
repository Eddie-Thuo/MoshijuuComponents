import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `moshijuu-video-player`
 * Moshijuu Video Player
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MoshijuuVideoPlayer extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        video {
          width: 560px;
          height: 240px;
          background: lightgray;
        }
        .video-controls {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 40px;
          background: lightgray;
        }
        .track-timeline {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        .track-bar {
          position: absolute;
          width: 100%;
          height: 2px;
          top: calc(50% - 1px);
          background: black;
        }
        .fill {
          background: blueviolet;
          width: 0px;
        }
        .video-track-pointer {
          position: absolute;
          left: 0;
          top: calc(50% - 7px);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: yellow;
          cursor: pointer;
        }
      </style>
      <video id="video_player" on-timeupdate="_updateTrack" on-ended="_handleEnd" controls>
        <source src="/video/sample.mp4" type="video/mp4">
      </video>
      <div class="video-controls">
        <div class="track-timeline">
          <div class="track-bar"></div>
          <div class="track-bar fill"></div>
          <span class="video-track-pointer"></span>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      playing: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      muted: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      ended: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      fullscreen: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      volume: {
        type: Number,
        value: 0.3,
        observer: '_volumeChanged'
      }
    };    
  }

  _updateTrack(event) {
    const currentTime = event.currentTarget.currentTime;
    console.log('Current Time | ' + currentTime);
  }

  _handleEnd() {
    this.dispatchEvent(new CustomEvent('videoEnded', {detail: {ended: true}}));
  }

  /**
   * Toggle play the player
   * @private
   */
  _togglePlay() {
    const video = this.$['volume_player'];
    this.playing = !this.playing;
    if (this.playing) {
      video.play();
    } else {
      video.pause();
    }
  }

  /**
   * Change the volume of the video when property
   * changes
   * @private
   * @param {Number} newVolume 
   */
  _volumeChanged(newVolume) {
    this.$['video_player'].volume = newVolume;
  }

  /**
   * Toggle mute the player
   * @private
   */
  _toggleMute() {
    this.muted != this.muted;
    this.$['video_player'].muted = this.muted;
  }
}

window.customElements.define('moshijuu-video-player', MoshijuuVideoPlayer);
