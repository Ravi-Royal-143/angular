import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrushService } from './service/crush.service';

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
  flames = {
    'f': 'Friends',
    'l': 'Love',
    'a': 'Affair',
    'm': 'Marriage',
    'e': 'Enemy',
    's': 'Sister',
  };
  fla = ['f', 'l', 'a', 'm', 'e', 's'];

  constructor(private fb: FormBuilder, private crushService: CrushService) { }

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
    if (this.userData.invalid) {
      return;
    }
    let { yourName, crushName } = this.userData.value;
    let checkYourName = yourName;
    let checkCrushName = crushName;
    if (checkYourName == checkCrushName) {
      this.result = 'Enemy';
      return;
    }
    var r = /\s+/g;
    checkYourName = checkYourName.toLowerCase().replace(r, "").split('');
    checkCrushName = checkCrushName.toLowerCase().replace(r, "").split('');
    checkYourName.forEach((firstData, i) => {
      checkCrushName.forEach((secondData, j) => {
        if (firstData === secondData && firstData != '') {
          checkYourName[i] = '';
          checkCrushName[j] = '';
        }
      })
    });
    checkYourName = checkYourName.join('')
    checkCrushName = checkCrushName.join('')
    let lengthInput = checkYourName.length + checkCrushName.length;
    let fla = ['f', 'l', 'a', 'm', 'e', 's'];
    lengthInput = lengthInput - 1;
    let lastStandingLetter = [...fla];
    while (lastStandingLetter.length > 1) {
      let removalIndex = lengthInput % lastStandingLetter.length;
      lastStandingLetter[removalIndex] = ' ';
      lastStandingLetter = lastStandingLetter.join('').trim().split(' ');
      if (lastStandingLetter.length > 1) {
        lastStandingLetter = lastStandingLetter.reverse().join('').split('');
      }
      lastStandingLetter = lastStandingLetter.join('').split('');
    }

    this.crushService.getCrush({ yourName, crushName }).subscribe(res => {
      this.result = this.flames[lastStandingLetter.join('')];
    }, err => {
      this.result = this.flames[lastStandingLetter.join('')];
    });
  }


  onBlurFields(validateField) {
    this[validateField] = true;
  }

  checkOnSubmit() {
    this.isyourNameValidate = true;
    this.iscrushNameValidate = true;
  }

}
