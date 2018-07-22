import { ElementRef } from '@angular/core';
import { ZIdentifierGenerator } from '@zthun/identifier.core';
import { ZIdDirective } from './z-id.directive';

describe('ZIdDirective', () => {
    let el: ElementRef;
    let generator: ZIdentifierGenerator;

    beforeEach(() => {
        el = new ElementRef(document.createElement('div'));
        generator = jasmine.createSpyObj('generator', ['generateAttributeForElement']);
    });

    function createTestTarget() {
        return new ZIdDirective(el, generator);
    }

    it('updates the attribute given the input value.', () => {
        // Arrange
        let target = createTestTarget();
        target.zid = 'foo';
        // Act
        target.ngOnInit();
        // Assert
        expect(generator.generateAttributeForElement).toHaveBeenCalledWith('id', target.zid, el.nativeElement);
    });
});
