import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutoUnsubscribeComponent } from 'src/app/shared/components/auto-unsubscribe/auto-unsubscribe.component';
import { UserDetailsService } from '../../service/user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent extends AutoUnsubscribeComponent implements OnInit {

  users: any;
  profileForm = this.fb.group({
    name: ['', Validators.required],
    crush: ['', Validators.required],
    description: ['']
  });

  constructor(
    private fb: FormBuilder,
    private userDetailsService: UserDetailsService
  ) {
    super();
   }

  ngOnInit(): void {
    const sub$ = this.userDetailsService.getUserDetails().subscribe(res => {
      this.users = res;
    });
    this.addsub(sub$);
  }

  onSubmit() {
    const payload = {
      ...this.profileForm.value
    };
    const sub$ = this.userDetailsService.postUserDetails(payload).subscribe(res => {
      this.users.push(res);
    });
    this.addsub(sub$);
  }

  deleteuser(id) {
    const sub$ = this.userDetailsService.deleteUserDetails(id).subscribe(res => {
      this.users = res;
    });
    this.addsub(sub$);
  }

}
