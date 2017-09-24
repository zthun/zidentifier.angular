import { ElementRef } from '@angular/core';

import { ZIdentifierAttribute } from './zidentifier.directive';
import { ZIdentifierDirective } from './zidentifier.directive';

describe('ZIdentifierDirective', () => {
    let rootElementWithId: ElementRef;
    let childElementWithZId: ElementRef;
    let grandChildElementWithZId: ElementRef;

    beforeEach(() => {
        let nativeRootElement: HTMLElement = document.createElement('div');
        let nativeChildElementWithZId: HTMLElement = document.createElement('div');
        let nativeGrandChildElementWithZId: HTMLElement = document.createElement('div');

        nativeRootElement.setAttribute('id', 'foo');
        nativeChildElementWithZId.setAttribute(ZIdentifierAttribute, 'child');
        nativeGrandChildElementWithZId.setAttribute(ZIdentifierAttribute, 'grand-child');

        nativeRootElement.appendChild(nativeChildElementWithZId);
        nativeChildElementWithZId.appendChild(nativeGrandChildElementWithZId);

        rootElementWithId = new ElementRef(nativeRootElement);
        childElementWithZId = new ElementRef(nativeChildElementWithZId);
        grandChildElementWithZId = new ElementRef(nativeGrandChildElementWithZId);
    });

    function createTestTarget(el: ElementRef) {
        return new ZIdentifierDirective(el);
    }

    describe('with an element that has both the zid and id.', () => {
        it('uses the id.', () => {
            // Arrange
            childElementWithZId.nativeElement.setAttribute('id', 'bar');
            // Act
            createTestTarget(childElementWithZId);
            // Assert
            expect(childElementWithZId.nativeElement.getAttribute('id')).toEqual('bar');
        });
    })

    describe('with a root element that has an id.', () => {
        it('generates the id on the native element.', () => {
            // Arrange
            createTestTarget(childElementWithZId);
            // Act
            createTestTarget(grandChildElementWithZId);
            // Assert
            expect(childElementWithZId.nativeElement.getAttribute('id')).toEqual('foo-child');
            expect(grandChildElementWithZId.nativeElement.getAttribute('id')).toEqual('foo-child-grand-child');
        });
    });

    describe('with a root element that does not have an id.', () => {
        it('does not generate the id on the native element.', () => {
            // Arrange
            rootElementWithId.nativeElement.removeAttribute('id');
            createTestTarget(childElementWithZId);
            // Act
            createTestTarget(grandChildElementWithZId);
            // Assert
            expect(childElementWithZId.nativeElement.getAttribute('id')).toBeFalsy();
            expect(grandChildElementWithZId.nativeElement.getAttribute('id')).toBeFalsy();
        });
    });
});
