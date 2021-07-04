import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { FlamesReq } from './model/flames.interface';
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


  onSubmit(): void {
    this.checkOnSubmit();
    if (this.flamesModel.userData.invalid) {
      return;
    }

    const { yourName, crushName, flamesRes } = this.flamesLogic();

    this.crushService.getCrush({ yourName, crushName, flamesRes }).pipe(finalize(() => {
      this.oneByOneRes();
      this.flamesModel.result = flamesRes;
    })).subscribe();
  }

  flamesLogic(): FlamesReq {
    const { yourName, crushName } = this.flamesModel.userData.value;
    let checkYourName = yourName.trim();
    let checkCrushName = crushName.trim();
    if (checkYourName == checkCrushName) {
      this.flamesModel.result = 'Enemy';
      return;
    }
    const r = /\s+/g;
    checkYourName = checkYourName.toLowerCase().replace(r, '').split('');
    checkCrushName = checkCrushName.toLowerCase().replace(r, '').split('');
    checkYourName.forEach((_, i) => {
      checkCrushName.forEach((_, j) => {
        if (checkYourName[i] === checkCrushName[j] && checkYourName[i] != '') {
          checkYourName[i] = '';
          checkCrushName[j] = '';
        }
      });
    });
    checkYourName = checkYourName.join('');
    checkCrushName = checkCrushName.join('');
    let lengthInput = checkYourName.length + checkCrushName.length;
    const fla = ['f', 'l', 'a', 'm', 'e', 's'];
    lengthInput = lengthInput - 1;
    let lastStandingLetter = [...fla];
    while (lastStandingLetter.length > 1) {
      const removalIndex = lengthInput % lastStandingLetter.length;
      this.flamesModel.removalOrder.push(lastStandingLetter[removalIndex]);
      lastStandingLetter[removalIndex] = ' ';
      lastStandingLetter = lastStandingLetter.join('').trim().split(' ');
      if (lastStandingLetter.length > 1) {
        lastStandingLetter = lastStandingLetter.reverse().join('').split('');
      }
      lastStandingLetter = lastStandingLetter.join('').split('');
    }
    const flamesRes = this.flamesModel.flames[lastStandingLetter.join('')];
    return { yourName, crushName, flamesRes };
  }

  oneByOneRes() {
    const interval = setInterval(() => {
      const firstElement = this.flamesModel.removalOrder.shift();
      const index = this.flamesModel.flamesTexts.findIndex(ele => ele.shortForm === firstElement);
      this.flamesModel.flamesTexts[index].isCancel = true;
      if (!this.flamesModel.removalOrder.length) {
        clearInterval(interval);
        this.showResSlow();
        this.removeIntervalFromModel('oneByOneResinterval');
      }
    }, 2000);
    this.flamesModel.intervals.push({
      name: 'oneByOneResinterval',
      interval
    });
  }

  showResSlow(): void {
    let time = 5;
    const interval1 = setInterval(() => {
      time--;
      this.flamesModel.waitingForRes = `Result in ${time}`;
      if (!time) {
        this.flamesModel.waitingForRes = this.flamesModel.result;
        clearInterval(interval1);
        this.removeIntervalFromModel('showResSlowinterval1');
      }
    }, 1000);
    this.flamesModel.intervals.push({
      name: 'showResSlowinterval',
      interval: interval1
    });
  }

  onBlurFields(validateField): void {
    this[validateField] = true;
  }

  checkOnSubmit(): void {
    this.flamesModel.isyourNameValidate = true;
    this.flamesModel.iscrushNameValidate = true;
  }

  reset(): void {
    this.flamesModel = new FlamesModel(this.fb);
    if (this.flamesModel.intervals.length) {
      this.flamesModel.intervals.map(data => this.removeIntervalFromModel(data.name));
    }
  }

  removeIntervalFromModel(removableIntervalName: string): void {
    clearInterval(this.flamesModel.intervals.find(data => data.name == removableIntervalName)?.interval);
    this.flamesModel.intervals = this.flamesModel.intervals.filter(data => data.name !== removableIntervalName);
  }

}
