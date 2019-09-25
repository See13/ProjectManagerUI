import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdateuserService } from './updateuser.service';
import { Router } from '@angular/router';
import { User } from '../app-model';

@Component({
  selector: 'app-upduser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user = new User();
  empId: string;
  ifAnyError: boolean;
  ifAnyWarning: boolean;
  ifPostedSuccessfully: boolean;
  errorAlertMessage: string;
  warningAlertMessage: string;
  userActionString: string;
  updUserForm: FormGroup;
  updatecomplete: boolean;

  constructor(private upduserService: UpdateuserService, private activatedRoute: ActivatedRoute,
              private router: Router, private fb: FormBuilder) {
    this.empId = '';
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.employeeId = '';
    this.ifAnyError = false;
    this.ifAnyWarning = false;
    this.ifPostedSuccessfully = false;
    this.errorAlertMessage = '';
    this.warningAlertMessage = '';
    this.userActionString = '';
    this.updatecomplete = false;
    this.initializeForm();
  }

  ngOnInit() {
    const params: any = this.activatedRoute.snapshot.params;
    this.empId = params.id;

    this.upduserService.getsingleuser(this.empId).subscribe((res: any) => {
      if (res) {
        this.user.firstName = res.fname;
        this.user.lastName = res.lname;
        this.user.employeeId = res.empid;
        this.ifAnyError = false;
        this.errorAlertMessage = '';
        this.ifPostedSuccessfully = false;
      }
    }, (err: any) => {
      this.ifAnyError = true;
      this.errorAlertMessage = err.message;
    });
  }

  initializeForm(): void {
    this.updUserForm = this.fb.group({
      fname: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]+$')])],
      lname: ['', Validators.pattern('^[a-zA-Z]+$')],
      empid: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  validateForm(): boolean {
    this.ifAnyWarning = false;
    this.warningAlertMessage = '';
    if (this.updUserForm.controls.fname.invalid || this.updUserForm.controls.lname.invalid || this.updUserForm.controls.empid.invalid) {
      return false;
    } else {
      return true;
    }
  }

  saveUser(): void {
    if (this.validateForm()) {
        this.upduserService.saveexistinguser(this.user, this.empId).subscribe((res: any) => {
          if (res) {
            this.userActionString = 'added';
            this.ifPostedSuccessfully = true;
            this.resetValue();
          }
        }, (err) => {
          this.ifAnyError = true;
          this.errorAlertMessage = err.message;
      });
    } else {
      this.ifAnyWarning = true;
      this.warningAlertMessage = 'Invalid or Missing Input';
    }
  }

  back(): void {
    this.router.navigateByUrl('/adduser');
  }

  resetValue(): void {
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.employeeId = '';
    this.updatecomplete = true;
  }
}
