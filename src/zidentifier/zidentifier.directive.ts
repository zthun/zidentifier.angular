import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

import { OnInit } from '@angular/core';

/**
 * The attribute that will be retrieved.
 */
export const ZIdentifierAttribute = 'zid';

/**
 * Represents the zidentifier directive to attach to elements.
 */
@Directive ({
    selector: '[zId]'
})
export class ZIdentifierDirective implements OnInit {
    /**
     * Initializes a new instance of this object.
     *
     * @param {ElementRef} el The element attached to this directive.
     */
    constructor(private el: ElementRef) { }

    /**
     * Initializes the element after the component has been created and added to the DOM.
     */
    public ngOnInit(): void {
        this.generate(this.el.nativeElement as HTMLElement);
    }

    /**
     * Generates the id for the element given the specified zid value.
     *
     * @param {HTMLElement} el The element to generate the id for.
     *
     * @return {Boolean | HTMLElement} The element is returned if an id was generated, or false if it could not be generated.
     */
    public generate(el: HTMLElement): boolean | HTMLElement {
        let rootElementWithId: HTMLElement = null;

        if (!!el.getAttribute('id')) {
            // Already has an id.
            return false;
        }

        for (let tracer = el.parentElement; !!tracer && rootElementWithId === null; tracer = tracer.parentElement) {
            rootElementWithId = !!tracer.getAttribute('id') ? tracer : null;
        }

        if (!rootElementWithId) {
            // Nobody has an id.
            return false;
        }

        let rootId: string = rootElementWithId.getAttribute('id');
        let zid: string = el.getAttribute(ZIdentifierAttribute);
        el.setAttribute('id', `${rootId}-${zid}`);
        return el;
    }
}
