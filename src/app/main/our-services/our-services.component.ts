import { Component } from '@angular/core';

@Component({
	selector: 'our-services',
	templateUrl: './our-services.component.html',
	styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent {
	showModal: boolean = false;
	services = [
		{
			imagePath: 'smart-contract-development.png',
			name: 'Smart contracts development',
		},
		{
			imagePath: 'exchanges.png',
			name: 'Exchanges',
		},
		{
			imagePath: 'blockchain-development.png',
			name: 'blockchain development',
		},
		{
			imagePath: 'hyperledger.png',
			name: 'Hyperledger',
		},
		{
			imagePath: 'private-blockchain-development.png',
			name: 'private blockchain development',
		},
		{
			imagePath: 'wallet.png',
			name: 'Wallet',
		},
	];
	constructor() {}

	showServices() {
		this.showModal = true;
	}

	hide() {
		this.showModal = false;
	}
}
