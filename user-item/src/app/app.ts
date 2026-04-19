import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserItem } from './user-item/user-item';
import { HelloWorld } from './hello-world/hello-world';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserItem, HelloWorld],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'app';
}
