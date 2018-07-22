import { ElementRef } from '@angular/core';
import { ZIdentifierGenerator } from '@zthun/identifier.core';
import { ZForDirective } from './z-for.directive';

describe('ZForIdDirective', () => {
    let el: ElementRef;
    let generator: ZIdentifierGenerator;

    beforeEach(() => {
        el = new ElementRef(document.createElement('div'));
        generator = jasmine.createSpyObj('generator', ['generateAttributeForElement']);
    });

    function createTestTarget() {
        return new ZForDirective(el, generator);
    }

    it('updates the attribute given the input value.', () => {
        // Arrange
        const target = createTestTarget();
        target.zfor = 'foo';
        // Act
        target.ngOnInit();
        // Assert
        expect(generator.generateAttributeForElement).toHaveBeenCalledWith('for', target.zfor, el.nativeElement);
    });
});
