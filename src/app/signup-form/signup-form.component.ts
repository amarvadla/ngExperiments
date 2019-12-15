import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userNameValidators } from './username-validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5), userNameValidators.cannotContainSpace], userNameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });

  login() {
    this.form.setErrors({
      InvalidLogin: true
    });
  }

  get userName() {
    return this.form.get('account.username');
  }

}
