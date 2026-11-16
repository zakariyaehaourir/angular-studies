import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './features/about/about';
import { Home } from './features/home/home';
import { Header } from './features/header/header';
import { TaskList } from './features/task-list/task-list';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, Header, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ehei-studies');
}
