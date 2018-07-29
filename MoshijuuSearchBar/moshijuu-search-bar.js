import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
/**
 * `moshijuu-search-bar`
 * Moshijuu Themed Search Bar
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MoshijuuSearchBar extends PolymerElement {
  static get template() {
    return html`  
    <style>
    .container {
        width: 500px;
        height: 70px;
        border: 1px solid black;
        display: flex;
        flex-direction: row;
    }
    input {
      width: inherit;
      height: inherit;
      outline: none;
      border: 0px;
      padding: 0px;
      margin-left: 7px;
      margin-right: 7px;
      background: transparent;
    }
    </style>

    <div class="container">
        <input type="text" placeholder$=[[placeholder]] >
    </div>
    `;
  }
  static get properties() {
    return {
      placeholder: {
        type: String,
        value: 'Search Here...',
      },
    };
  }

  ready() {
    super.ready();
  }
}

window.customElements.define('moshijuu-search-bar', MoshijuuSearchBar);
