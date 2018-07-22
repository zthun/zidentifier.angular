import { ElementRef, OnInit } from '@angular/core';
import { ZIdentifierGenerator } from '@zthun/identifier.core';

/**
 * Represents an abstract implementation of a directive that generates
 * an attribute on an element.
 */
export abstract class ZAbstractAttrDirective implements OnInit {
  /**
   * Initializes a new instance of this object.
   *
   * @param attr The attribute to generate.
   * @param valueFn The callback that retrieves the current value.
   * @param el The element the directive is attached to.
   * @param generator The generator service.
   */
  public constructor(
    private readonly attr: string,
    private readonly valueFn: () => string,
    private readonly el: ElementRef,
    private readonly generator: ZIdentifierGenerator) { }

  /**
   * Initializes the element after the component has been created and added to the DOM.
   */
  public ngOnInit(): void {
    this.generator.generateAttributeForElement(this.attr, this.valueFn(), this.el.nativeElement);
  }
}
