import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { ZIdGeneratorService } from '@zthun/zidentifier.core';

/**
 * Represents the zidentifier directive to attach the zId.
 */
@Directive ({
    selector: '[zId]'
})
export class ZIdentifierDirective implements OnInit {
    /**
     * The selector identifier.
     */
    @Input() public zId: string;

    /**
     * Initializes a new instance of this object.
     *
     * @param {ElementRef} el The element attached to this directive.
     * @param {ZIdGeneratorService} generator The generator service.
     */
    constructor(private el: ElementRef, private generator: ZIdGeneratorService) { }

    /**
     * Initializes the element after the component has been created and added to the DOM.
     */
    public ngOnInit(): void {
        this.generator.generateIdForElement(this.zId, this.el.nativeElement);
    }
}