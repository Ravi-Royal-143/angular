import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flames',
  templateUrl: './flames.component.html',
  styleUrls: ['./flames.component.scss']
})
export class FlamesComponent {

  result: string = '';
  
  isyourNameValidate: boolean;
  iscrushNameValidate: boolean;

  userData: FormGroup = this.fb.group({
    yourName: ['', Validators.required],
    crushName: ['', Validators.required]
  });
  flames = ['Friends', 'Love', 'Affair', 'Marriage', 'Enemy', 'Sister'];
  
  constructor(private fb: FormBuilder) { }

  get formDetails() {
    return this.userData.controls;
  }

  get yourNameDetails() {
    return this.formDetails.yourName;
  }

  get crushNameFormDetails() {
    return this.formDetails.crushName;
  }


  onSubmit() {
    this.checkOnSubmit();
    if(this.userData.invalid) {
      return;
    }
    let { yourName , crushName } = this.userData.value;
    if(yourName == crushName ) {
      this.result = 'Enemy';
      return;
    }
    var r = /\s+/g;
    yourName = yourName.toLowerCase().replace(r, "").split('');
    crushName = crushName.toLowerCase().replace(r, "").split('');
    yourName.forEach((firstData, i) => {
      crushName.forEach((secondData, j) => {
        if (firstData === secondData && firstData != '') {
          yourName[i] = '';
          crushName[j] = '';
        }
      })
    });
    yourName = yourName.join('')
    crushName = crushName.join('')
    let lengthInput = yourName.length + crushName.length;
    
    this.result = this.flames[(lengthInput % 6) - 1];
  }

  
  onBlurFields(validateField) {
    this[validateField] = true;
  }

  checkOnSubmit() {
    this.isyourNameValidate = true;
    this.iscrushNameValidate = true;
  }

}
