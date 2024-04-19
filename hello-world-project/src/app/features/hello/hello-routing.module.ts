import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloBoardComponent } from './hello-board/hello-board.component';

const routes: Routes = [
  {path: '', component: HelloBoardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }
