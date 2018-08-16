import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-input/iron-input.js';
/**
 * `moshijuu-search-bar`
 * Moshijuu Themed Search Bar
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
const definedSearchResults = ['Eddie', 'Joan' , 'Sam', 'Olivia'];
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
        <input type="text" placeholder$="[[placeholder]]">
       </iron-input>
    </div>
    <!-- Unordered list of search results -->
    <div class="search-results-container">
      <ul>
        <li>Result1</li>
        <li>Result2</li>
        <li>Result3</li>
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

  ready() {
    super.ready();
    this.input.addEventListener('input', (event) => {
    this.filterSearchCriteria(event.target.value);
    this.resultsTemplate(this._matches);
    });
  }

  get input() {
    return this.shadowRoot.querySelector('input');
  }

  resultsTemplate(matches) {
    let template = '<ul>'
    matches.forEach((result) => {
      let listItem = '<li>' + result +  '</li>';
      template += listItem;
    });
    template += '</ul>'
    return template;
  }

  filterSearchCriteria(value) {
    this._matches = definedSearchResults.filter((result) => {
        return result.toLowerCase().includes(value.toLowerCase());
    });
  }
}

window.customElements.define('moshijuu-search-bar', MoshijuuSearchBar);
