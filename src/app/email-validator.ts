import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const emailRegex = RegExp('(?=.*[@])');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'une adresse mail doit contenir un @'
        }
    };

    return !valid ? errors : null;
}