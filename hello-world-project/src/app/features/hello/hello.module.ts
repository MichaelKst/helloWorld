import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloBoardComponent } from './hello-board/hello-board.component';
import { HelloFormComponent } from './hello-board/hello-form/hello-form.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HelloRoutingModule,
    HelloBoardComponent
  ]
})
export class HelloModule { }
