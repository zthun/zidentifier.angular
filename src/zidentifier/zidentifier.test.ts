import { ElementRef } from '@angular/core';

import { ZIdGeneratorService } from '@zthun/zidentifier.core';

export class ZIdentifierDirectiveTest {
    public elementReference: ElementRef;
    public generator: ZIdGeneratorService;

    public constructor(svcName: string) {
        let nativeElement: HTMLElement = document.createElement('div');
        this.elementReference = new ElementRef(nativeElement);

        this.generator = jasmine.createSpyObj<ZIdGeneratorService>('ZIdGeneratorService', [svcName]);

        let generatorSpy: any = this.generator;
        generatorSpy[svcName].and.callFake((zid: string, el: HTMLElement): boolean | HTMLElement => el);
    }
}
