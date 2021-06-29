import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class FlamesModel {

    flamesTexts: { name: string, isCancel: boolean, shortForm: string }[];
    waitingForRes: string = 'Be ready';
    flames: { [key: string]: string };
    result: string = '';
    userData: FormGroup;
    isyourNameValidate: boolean;
    iscrushNameValidate: boolean;
    interval;
    removalOrder = [];

    constructor(private fb: FormBuilder) {
        this.flamesTexts = [
            {
                name: 'Friends',
                isCancel: false,
                shortForm: 'f'
            },
            {
                name: 'Love',
                isCancel: false,
                shortForm: 'l'
            },
            {
                name: 'Affair',
                isCancel: false,
                shortForm: 'a'
            },
            {
                name: 'Marriage',
                isCancel: false,
                shortForm: 'm'
            },
            {
                name: 'Enemy',
                isCancel: false,
                shortForm: 'e'
            },
            {
                name: 'Sister',
                isCancel: false,
                shortForm: 's'
            }
        ];

        this.userData = this.fb.group({
            yourName: ['', Validators.required],
            crushName: ['', Validators.required]
        });
        this.flames = {
            'f': 'Friends',
            'l': 'Love',
            'a': 'Affair',
            'm': 'Marriage',
            'e': 'Enemy',
            's': 'Sister',
        };
    }
}