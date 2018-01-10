import { NgModule } from '@angular/core';

import { ZIdGeneratorService } from '@zthun/zidentifier.core';

import { ZForIdentifierDirective } from './zidentifier.zforid.directive';
import { ZIdentifierDirective } from './zidentifier.zid.directive';

/**
 * Represents the module entry point for the zidentifier feature.
 */
@NgModule({
    declarations: [
        ZIdentifierDirective,
        ZForIdentifierDirective
    ],
    exports: [
        ZIdentifierDirective,
        ZForIdentifierDirective
    ],
    providers: [
        ZIdGeneratorService
    ]
})
export class ZIdentifierModule { }
