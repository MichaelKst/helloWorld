import { Component } from '@angular/core';
import { HelloFormComponent } from './hello-form/hello-form.component';
import { HelloResultComponent } from './hello-result/hello-result.component';

@Component({
  selector: 'app-hello-board',
  standalone: true,
  imports: [
    HelloFormComponent,
    HelloResultComponent
  ],
  templateUrl: './hello-board.component.html',
  styleUrl: './hello-board.component.scss'
})
export class HelloBoardComponent {

}
