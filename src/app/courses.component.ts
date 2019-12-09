import { Component } from '@angular/core';
import { CourseService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ getTitle() }}</h2>
    <input (keyup) = "onKeyUp($event)" />
    `
})

// <button class="btn btn-primary" [class.active] = "isActive()" [style.backgroundColor] = " isActive() ? 'red' : 'blue' ">Save</button>
// <img [src] = "imageUrl"/>
// <button (click) = "onSave($event)">Save</button>

export class CoursesComponent {
    title = "List of courses";
    courses;
    imageUrl = "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"

    getTitle(){
        return this.title;
    }

    isActive(){
        return true;
    }

    onSave($event){
        console.log($event);
    }

    onKeyUp($event){
        if($event.keyCode === 13){
            console.log("Enter was pressed")
        }
    }

    constructor(service: CourseService){
        this.courses = service.getCourses();
    }
}