import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  courses = [{ id: 1, name: 'angular' }, { id: 2, name: 'node' }]

  onRemove(course) {
    let index = this.courses.indexOf(course)
    this.courses.splice(index, 1)
    console.log(index)
  }
  onFavoriteChanged(isFavorite: boolean) {
    console.log(isFavorite);
  }
}
