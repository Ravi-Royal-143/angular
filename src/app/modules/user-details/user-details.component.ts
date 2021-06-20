import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDetailsService } from '../../service/user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  users: any;
  profileForm = this.fb.group({
    name: ['', Validators.required],
    crush: ['', Validators.required],
    description: ['']
  });

  constructor(
    private fb: FormBuilder,
    private userDetailsService: UserDetailsService
  ) { }

  ngOnInit(): void {
    this.userDetailsService.getUserDetails().subscribe(res => {
      this.users = res;
    });
  }

  onSubmit() {
    const payload = {
      ...this.profileForm.value,
      id: Math.random()
    };
    this.userDetailsService.postUserDetails(payload).subscribe(res => {
      this.users = res;
    });
  }

  deleteuser(id) {
    this.userDetailsService.deleteUserDetails(id).subscribe(res => {
      this.users = res;
    });
  }

}
