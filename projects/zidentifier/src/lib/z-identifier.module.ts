import { NgModule } from '@angular/core';
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
  ]
})
export class ZIdentifierModule { }
