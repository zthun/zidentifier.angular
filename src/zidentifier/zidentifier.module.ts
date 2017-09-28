import { NgModule } from '@angular/core';

import { ZIdentifierDirective } from './zidentifier.directive';

/**
 * Represents the module entry point for the zidentifier feature.
 */
@NgModule({
    declarations: [
        ZIdentifierDirective
    ],
    exports: [
        ZIdentifierDirective
    ]
})
export class ZIdentifierModule { }
