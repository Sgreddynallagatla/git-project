import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'git-app';


  usersData=[
    {
      "id":1,
      "name":"Leanne Graham",
      "username":"Bret",
      "email":"Sincere@april.biz",
    },
    {
      "id":2,
      "name":"Ervin Howell",
      "username":"Antonette",
      "email":"Shanna@melissa.tv",
    },
    {
      "id":3,
      "name":"Clementine Bauch",
      "username":"Samantha",
      "email":"Nathan@yesenia.net",
    }
  ]
}
