import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class Login implements OnInit {

    loginForm: FormGroup | any;
    constructor() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(
                '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
            ),]),
            password: new FormControl('', [Validators.required])
        });
    }

    ngOnInit(): void {
    }

    onSubmit() {
        alert('This is test')
        if (!this.loginForm.valid) {
            console.log('fff', 'page had not valid')
            return;
        }
        console.log('fff', 'page is valid' + this.loginForm.value)
        localStorage.setItem('user', this.loginForm.value)
    }
}