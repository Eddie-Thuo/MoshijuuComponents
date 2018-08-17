import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-input/iron-input.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
/**
 * `moshijuu-search-bar`
 * Moshijuu Themed Search Bar
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
const definedSearchResults = ['Eddie', 'Joan' , 'Sam', 'Olivia']
class MoshijuuSearchBar extends PolymerElement {
  static get template() {
    return html`
    <style>
    .container {
        max-width: 500px;
        height: 40px;
        border: 1px solid black;
        display: flex;
        flex-direction: row;
        border-radius: 5px;
    }

    .search-results-container {
      max-width: 500px;
      height: auto;
      margin-top: 5px;
      border: 1px solid black;
      border-radius: 5px;
    }

    .empty {
      border: 0;
    }

    iron-input {
      width: 100%;
      height: inherit;
      outline: none;
      border: 0px;
      padding: 0px;
      margin-left: 7px;
      margin-right: 7px;
      background: transparent;
    }

    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: 0px;
      background: transparent;
    }

    ul {
        padding: 0px;
    }

    li {
      list-style-type: none;
      margin-left: 7px;
      margin-right: 7px;
    }

    input, li {
      font-size: 14px;
    }

    li:hover {
      background-color: pink;
    }

    </style>

    <div class="container">
      <iron-input>
        <input type="text" placeholder$="[[placeholder]]" on-input="_handleInput">
       </iron-input>
    </div>
    <div class$="[[_computeSearchContainerClass(_matches)]]">
      <ul>
        <dom-repeat items="{{_matches}}">
          <template>
            <li>{{item}}</li>
          </template>
        </dom-repeat>
      </ul>
    </div>
    `;
  }
  static get properties() {
    return {
      placeholder: {
        type: String,
        value: 'Search Here...',
      },
      _matches: {
        type: Array
      }
    };
  }

  _handleInput(event) {
    this.filterSearchCriteria(event.target.value);
  }

  _computeSearchContainerClass(matches) {
    let cls = 'search-results-container';
    if (matches.length === 0) {
      cls += ' empty'
    }
    return cls;
  }

  filterSearchCriteria(value) {
    this._matches = definedSearchResults.filter((result) => {
        return result.toLowerCase().includes(value.toLowerCase());
    });
  }
}

window.customElements.define('moshijuu-search-bar', MoshijuuSearchBar);
