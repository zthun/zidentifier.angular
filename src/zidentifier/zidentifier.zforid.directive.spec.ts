import { ZIdentifierDirectiveTest } from './zidentifier.test';
import { ZForIdentifierDirective } from './zidentifier.zforid.directive';

describe('ZIdentifierDirective', () => {
    let testUtil: ZIdentifierDirectiveTest;

    beforeEach(() => {
        testUtil = new ZIdentifierDirectiveTest('generateForIdForElement');
    });

    it('updates the attribute given the input value.', () => {
        // Arrange
        let target = new ZForIdentifierDirective(testUtil.elementReference, testUtil.generator);
        target.zForId = 'foo';
        // Act
        target.ngOnInit();
        // Assert
        expect(testUtil.generator.generateForIdForElement).toHaveBeenCalledWith(target.zForId, testUtil.elementReference.nativeElement);
    });
});
