import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPipe } from './header.pipe';
import { HeaderDirective } from './header.directive';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderPipe,
    HeaderDirective,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderPipe,
    HeaderDirective,
    HeaderComponent
  ]
})
export class HeaderModule { }
