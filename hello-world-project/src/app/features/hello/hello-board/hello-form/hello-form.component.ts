import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './hello-form.component.html',
  styleUrl: './hello-form.component.scss'
})
export class HelloFormComponent {

  name = '';

  submit() {
    console.log('submit')
  }

}
