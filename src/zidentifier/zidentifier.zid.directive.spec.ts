import { ElementRef } from '@angular/core';

import { ZIdGeneratorService } from '@zthun/zidentifier.core';
import { ZIdentifierDirective } from './zidentifier.zid.directive';

describe('ZIdentifierDirective', () => {
    let elementReference: ElementRef;
    let zIdGeneratorSvc: ZIdGeneratorService;

    beforeEach(() => {
        let nativeElement: HTMLElement = document.createElement('div');
        elementReference = new ElementRef(nativeElement);

        zIdGeneratorSvc = jasmine.createSpyObj<ZIdGeneratorService>('ZIdGeneratorService', ['generateIdForElement']);

        let zIdGeneratorSvcSpy: any = zIdGeneratorSvc;
        zIdGeneratorSvcSpy.generateIdForElement.and.callFake((zid: string, el: HTMLElement): boolean | HTMLElement => el);
    });

    it('updates the attribute given the input value.', () => {
        // Arrange
        let target = new ZIdentifierDirective(elementReference, zIdGeneratorSvc);
        target.zId = 'foo';
        // Act
        target.ngOnInit();
        // Assert
        expect(zIdGeneratorSvc.generateIdForElement).toHaveBeenCalledWith(target.zId, elementReference.nativeElement);
    });
});
