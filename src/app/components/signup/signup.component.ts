import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  contact: { emailid: string; } | any;
  model: any = {};

  constructor() { }

  ngOnInit(): void {
    this.contact={
      emailid: '',
    }
  }
  @ViewChild('f') courseForm: NgForm | any;
  // onSubmit(form: NgForm) {
  //   console.log("Course Name is : " + form.value.name);
  //   console.log("Course Desc is : " + form.value.emailid);
  //   console.log("Course Amount is : " + form.value.password);   
  //   console.log("Course Desc is : " + form.value.cpassword);
  //   }
  onSubmit(form: NgForm) {
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
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
