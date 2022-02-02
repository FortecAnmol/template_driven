import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('f') courseForm: NgForm | any;
  onSubmit(form: NgForm) {
    console.log("Course Desc is : " + form.value.emailid);
    console.log("Course Amount is : " + form.value.password);   
    }
  
    onClear() {
    // Now that we have access to the form via the 'ViewChild', we can access the form and clear it.
    this.courseForm.reset();
    }
  
    onDelete() {
    }
  
    ngOnDestroy() {    
    }


}
