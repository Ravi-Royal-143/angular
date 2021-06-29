import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { FlamesModel } from './model/flames.model';
import { CrushService } from './service/crush.service';

@Component({
  selector: 'app-flames',
  templateUrl: './flames.component.html',
  styleUrls: ['./flames.component.scss']
})
export class FlamesComponent {

  flamesModel = new FlamesModel(this.fb);

  fla = ['f', 'l', 'a', 'm', 'e', 's'];

  constructor(private fb: FormBuilder, private crushService: CrushService) { }

  get formDetails() {
    return this.flamesModel.userData.controls;
  }

  get yourNameDetails() {
    return this.formDetails.yourName;
  }

  get crushNameFormDetails() {
    return this.formDetails.crushName;
  }


  onSubmit() {
    this.checkOnSubmit();
    if (this.flamesModel.userData.invalid) {
      return;
    }
    let { yourName, crushName } = this.flamesModel.userData.value;
    let checkYourName = yourName.trim();
    let checkCrushName = crushName.trim();
    if (checkYourName == checkCrushName) {
      this.flamesModel.result = 'Enemy';
      return;
    }
    var r = /\s+/g;
    checkYourName = checkYourName.toLowerCase().replace(r, "").split('');
    checkCrushName = checkCrushName.toLowerCase().replace(r, "").split('');
    checkYourName.forEach((_, i) => {
      checkCrushName.forEach((_, j) => {
        if (checkYourName[i] === checkCrushName[j] && checkYourName[i] != '') {
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
      this.flamesModel.removalOrder.push(lastStandingLetter[removalIndex]);
      lastStandingLetter[removalIndex] = ' ';
      lastStandingLetter = lastStandingLetter.join('').trim().split(' ');
      if (lastStandingLetter.length > 1) {
        lastStandingLetter = lastStandingLetter.reverse().join('').split('');
      }
      lastStandingLetter = lastStandingLetter.join('').split('');
    }

    console.log(this.flamesModel.removalOrder)
    let flamesRes = this.flamesModel.flames[lastStandingLetter.join('')]

    this.crushService.getCrush({ yourName, crushName, flamesRes }).pipe(finalize(() => {
      this.oneByOneRes();
      this.flamesModel.result = flamesRes;
    })).subscribe();
  }

  showResSlow() {
    let time = 5;
    let interval1 = setInterval(() => {
      time--;
      this.flamesModel.waitingForRes = `Result in ${time}`
      if (!time) {
        this.flamesModel.waitingForRes = this.flamesModel.result;
        clearInterval(interval1);
      }
    }, 1000);
  }

  oneByOneRes() {
    let interval = setInterval(() => {
      const firstElement = this.flamesModel.removalOrder.shift();
      let index = this.flamesModel.flamesTexts.findIndex(ele => ele.shortForm === firstElement);
      this.flamesModel.flamesTexts[index].isCancel = true;
      if (this.flamesModel.removalOrder.length < 1) {
        clearInterval(interval);
        this.showResSlow();
      }
    }, 1000);
  }


  onBlurFields(validateField) {
    this[validateField] = true;
  }

  checkOnSubmit() {
    this.flamesModel.isyourNameValidate = true;
    this.flamesModel.iscrushNameValidate = true;
  }

  reset() {
    this.flamesModel = new FlamesModel(this.fb);
    if (this.flamesModel.interval) {

    }
  }

}
