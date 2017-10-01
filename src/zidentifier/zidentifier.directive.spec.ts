import { ElementRef } from '@angular/core';
import { ZIdGeneratorService } from '@zthun/zidentifier.core';

import { ZIdentifierDirective } from './zidentifier.directive';

describe('ZIdentifierDirective', () => {
    const ZId = 'foo';

    let elementReference: ElementRef;
    let zIdGeneratorSvc: ZIdGeneratorService;
    let zIdGeneratorSvcSpy: any;

    beforeEach(() => {
        let nativeElement: HTMLElement = document.createElement('div');
        elementReference = new ElementRef(nativeElement);

        zIdGeneratorSvc = jasmine.createSpyObj<ZIdGeneratorService>('ZIdGeneratorService', ['generateIdForElement']);
        zIdGeneratorSvcSpy = zIdGeneratorSvc;

        zIdGeneratorSvcSpy.generateIdForElement.and.callFake((zid: string, el: HTMLElement): boolean | HTMLElement => el);
    });

    function createTestTarget() {
        return new ZIdentifierDirective(elementReference, zIdGeneratorSvc);
    }

    it('updates the id given the zid value.', () => {
        // Arrange
        let target = createTestTarget();
        target.zId = ZId;
        // Act
        target.ngOnInit();
        // Assert
        expect(zIdGeneratorSvc.generateIdForElement).toHaveBeenCalledWith(ZId, elementReference.nativeElement);
    });
});
