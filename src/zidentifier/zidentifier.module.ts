import { NgModule } from '@angular/core';

import { ZIdGeneratorService } from '@zthun/zidentifier.core';

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
    ],
    providers: [
        ZIdGeneratorService
    ]
})
export class ZIdentifierModule { }
