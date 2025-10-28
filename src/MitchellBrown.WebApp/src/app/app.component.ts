import { Component } from '@angular/core';
import { HeaderComponent } from './components';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet
],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  viewModel$: Observable<{}> = null!;
}
