import { Directive, ElementRef, Input } from '@angular/core';
import { ZIdentifierGenerator } from '@zthun/identifier.core';
import { ZAbstractAttrDirective } from '../z-attr/z-abstract-attr-directive.class';

/**
 * Represents the directive to attach a for attribute.
 */
@Directive({
    selector: '[zfor]'
})
export class ZForDirective extends ZAbstractAttrDirective {
    /**
     * The selector identifier.
     */
     @Input()
     public zfor: string;

     /**
      * Initializes a new instance of this object.
      *
      * @param el The element attached to this directive.
      * @param generator The generator service.
      */
     constructor(el: ElementRef, generator: ZIdentifierGenerator) {
       super('for', () => this.zfor, el, generator);
     }
}
