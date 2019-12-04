import { Component } from '@angular/core';
import { CourseService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses"> 
        {{ course }}
        </li>
    </ul>
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses;

    getTitle(){
        return this.title;
    }

    constructor(service: CourseService){
        this.courses = service.getCourses();
    }
}