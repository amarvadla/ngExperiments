import { Component } from '@angular/core';
import { CourseService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    {{ text | summary}}
    `
})

// <button class="btn btn-primary" [class.active] = "isActive()" [style.backgroundColor] = " isActive() ? 'red' : 'blue' ">Save</button>
// <img [src] = "imageUrl"/>
// <button (click) = "onSave($event)">Save</button>
// <h2>{{ getTitle() }}</h2>
    // <input [(ngModel)]="email" (keyup.enter) = "onKeyUp()" />

export class CoursesComponent {
    title = "List of courses";
    courses;
    imageUrl = "https://homepages.cae.wisc.edu/~ece533/images/airplane.png";
    email = "amarvadla@gmail.com";
    text = "asdjd lkajslkdjalskjdl kjalskjd laksj dlakjsdl kajslkd jalsj dlaksjdl aksjdl kajdlkasj lkdjalskdjlk";

    getTitle() {
        return this.title;
    }

    isActive() {
        return true;
    }

    onSave($event) {
        console.log($event);
    }

    onKeyUp() {
        console.log(this.email)
    }

    constructor(service: CourseService) {
        this.courses = service.getCourses();
    }
}