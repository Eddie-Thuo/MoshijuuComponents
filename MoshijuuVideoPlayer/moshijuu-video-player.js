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
      <video controls>
        <source src="/video/sample.mp4" type="video/mp4">
      </video>

    `;
  }
  static get properties() {
    return {
    };
  }
}

window.customElements.define('moshijuu-video-player', MoshijuuVideoPlayer);
