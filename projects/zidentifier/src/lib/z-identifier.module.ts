import { NgModule } from '@angular/core';
import { ZIdentifierGenerator } from '@zthun/identifier.core';
import { ZForDirective } from './z-for/z-for.directive';
import { ZIdDirective } from './z-id/z-id.directive';

@NgModule({
  declarations: [
    ZForDirective,
    ZIdDirective
  ],
  exports: [
    ZForDirective,
    ZIdDirective
  ],
  providers: [
    ZIdentifierGenerator
  ]
})
export class ZIdentifierModule { }
