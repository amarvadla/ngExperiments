import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form = new FormGroup({
    topics: new FormArray([])
  })

  onEnter(topic: HTMLInputElement) {
    this.topicValues.push(new FormControl(topic.value));
    topic.value = "";
  }

  onRemove(topic: FormControl) {
    let index = this.topicValues.controls.indexOf(topic);
    this.topicValues.removeAt(index);
  }

  get topicValues() {
    return (this.form.get('topics') as FormArray)
  }
}
