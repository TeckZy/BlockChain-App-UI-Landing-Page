import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	opened: boolean = false;
	navMenu = [
		{ name: 'Home' },
		{ name: 'PORTFOLIO' },
		{ name: 'TECHNOLOGIES' },
		{ name: 'MARKETING INSIGHT' },
		{
			name: 'SERVICES',
			submenus: [
				{ name: 'Smart contracts' },
				{ name: 'Cyber Security' },
				{ name: 'Smart contracts' },
				{ name: 'Cyber Security' },
			],
		},
		{ name: 'ABOUT Us' },
	];
	constructor() {}

	toggleSidebar() {
		this.opened = !this.opened;
	}
}
