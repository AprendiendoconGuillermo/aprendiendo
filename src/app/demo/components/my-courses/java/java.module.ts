import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop/desktop.component';
import { SpringBootComponent } from './spring-boot/spring-boot.component';



@NgModule({
  declarations: [
    DesktopComponent,
    SpringBootComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JavaModule { }
