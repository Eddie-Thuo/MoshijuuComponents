import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `moshijuu-overlay`
 * Moshijuu Overlay
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MoshijuuOverlay extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        :host([active]) .overlay {
          display: block;
        }

        :host([dark]) .overlay {
          background: var(--moshijuu-overlay-dark-color, #757575);
        }

        .overlay {
          position: absolute;
          background-color: var(--moshijuu-overlay-color, white);
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: none;
        }
      </style>
      <div class="overlay"></div>
    `;
  }
  static get properties() {
    return {
      /** Determines whether the overlay is active or not */
      active: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
        observer: '_handleFocusSiblingElements'
      },
      /** Changes to a darker theme when overlay is active */
      dark: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      opacity: {
        type: Number, 
        value: 0.7,
        observer: '_opacityChanged'
      }
    };
  }

/**
 * Observes changes to the opacity of the overlay
 * @param {Number} newOpacity  new opacity value
 * @param {Number} oldOpacity old opacity value
 */
  _opacityChanged(newOpacity, oldOpacity) {
    if (newOpacity != oldOpacity) {
      this.shadowRoot.querySelector('.overlay').style.opacity = newOpacity;
    }
  }

  /**
   * Inspects each sibling element to the overlay 
   * and toggles their focusability
   * @param {Boolean} isCurrentlyActive the active state of the overlay
   */
  _handleFocusSiblingElements(isCurrentlyActive) {
    let toggleIndex = isCurrentlyActive ? -1 : 0;
    let parentContainer = this.parentElement;
    if (parentContainer) {
      let children = Array.from(parentContainer.childNodes);
      children.forEach((child) => {
        if (child !== parentContainer) {
          child.tabIndex = toggleIndex;
        }
      });
    }
  }
}

window.customElements.define('moshijuu-overlay', MoshijuuOverlay);
