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
      </style>
      <video id="video_player" controls>
        <source src="/video/sample.mp4" type="video/mp4">
      </video>
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

  ready() {
    super.ready();
    this.$['video_player'].addEventListener('timeupdate', (event) => {
      const currentTime = event.currentTarget.currentTime;
      console.log('Current Time | ' + currentTime);
    });
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
