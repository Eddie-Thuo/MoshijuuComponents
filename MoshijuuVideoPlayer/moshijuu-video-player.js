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
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'moshijuu-video-player',
      },
    };
  }
}

window.customElements.define('moshijuu-video-player', MoshijuuVideoPlayer);
