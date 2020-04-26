import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { DatePipe } from '@angular/common';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helper/must-match.validator';

// import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'appBootstrap';

    model;

    // constructor() {}
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({

            firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
            lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
            email: ['', [Validators.required, Validators.email]],
            confirmEmail: ['', [Validators.required, Validators.email]],//Validators.minLength(6)]],
            // dp: ['', Validators.required],
            phoneNumber: ['', [Validators.required, Validators.minLength(11)]],
            password: ['', [Validators.required, Validators.minLength(8),Validators.pattern('[a-z0-9]*$')]],
        }, {
            validator: MustMatch('email', 'confirmEmail')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

    // $http.post('/student/submitData', { student:$scope.student })
    //                 .success(onSuccess)
    //                 .error(onError);

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
}
