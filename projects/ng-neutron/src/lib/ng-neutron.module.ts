import { NgModule } from '@angular/core';
import { NgNeutronComponent } from './ng-neutron.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [NgNeutronComponent, ButtonComponent, NavbarComponent],
  imports: [
  ],
  exports: [NgNeutronComponent, ButtonComponent, NavbarComponent],
})
export class NgNeutronModule { }
