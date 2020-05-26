import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'contact-us',
	templateUrl: './contact-us.component.html',
	styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
	showModal: boolean = false;
	queryForm: FormGroup;
	submitted = false;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.queryForm = this.formBuilder.group({
			name: [
				'',
				[
					Validators.required,
					Validators.minLength(3),
					Validators.maxLength(32),
					Validators.pattern('^[a-zA-Z ]*$'),
				],
			],
			email: ['', [Validators.required, Validators.email]],
			company: [
				'',
				[Validators.required, Validators.pattern('^[A-Za-z0-9 ]+$')],
			],
			subject: ['', [Validators.required, Validators.maxLength(15)]],
			message: [
				'',
				[
					Validators.required,
					Validators.minLength(30),
					Validators.maxLength(150),
				],
			],
		});
	}

	get f() {
		return this.queryForm.controls;
	}

	onSubmit() {
		this.submitted = true;

		if (this.queryForm.invalid) {
			return;
		}
		this.showModal = true;
	}

	hide() {
		this.showModal = false;
	}
}
