import { Directive, ElementRef, Input } from '@angular/core';
import { ZIdentifierGenerator } from '@zthun/identifier.core';
import { ZAbstractAttrDirective } from '../z-identifier/z-abstract-attr-directive.class';

/**
 * Represents the directive to attach the zId.
 */
@Directive({
    selector: '[zid]'
})
export class ZIdDirective extends ZAbstractAttrDirective {
    /**
     * The selector identifier.
     */
     @Input()
     public zid: string;

     /**
      * Initializes a new instance of this object.
      *
      * @param el The element attached to this directive.
      * @param generator The generator service.
      */
     constructor(el: ElementRef, generator: ZIdentifierGenerator) {
       super('id', () => this.zid, el, generator);
     }
}
