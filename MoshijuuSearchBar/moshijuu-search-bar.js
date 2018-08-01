import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
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
        width: 500px;
        height: 40px;
        border: 1px solid black;
        display: flex;
        flex-direction: row;
        border-radius: 5px;
    }

    .search-results-container {
      width: 500px;
      height: auto;
      margin-top: 5px;
      border: 1px solid black;
      border-radius: 5px;
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
        <input type="text" placeholder$="[[placeholder]]" >
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
    let resultsTemplate = '<ul>'
    matches.forEach((result) => {
      let listItem = '<li>' + result +  '</li>'; 
      this.resultsTemplate += listItem;
    });
    str += '</ul>'
    return resultsTemplate;
  }

  filterSearchCriteria(value) {
    this._matches = definedSearchResults.filter((result) => {
        return result.toLowerCase().includes(value.toLowerCase());
    });
  }
}

window.customElements.define('moshijuu-search-bar', MoshijuuSearchBar);
