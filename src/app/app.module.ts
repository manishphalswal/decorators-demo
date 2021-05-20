import { HeaderDirective } from './header/header.directive';
import { HeaderModule } from './header/header.module';

import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransformPipe } from './pipe/transform.pipe';
import { MyDirectiveDirective } from './directives/my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    TransformPipe,
    MyDirectiveDirective,
    UserComponent
  ],
  imports: [
    BrowserModule, HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
