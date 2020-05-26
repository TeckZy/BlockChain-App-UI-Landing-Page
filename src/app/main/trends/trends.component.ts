import { Component } from '@angular/core';

@Component({
	selector: 'app-trends',
	templateUrl: './trends.component.html',
	styleUrls: ['./trends.component.scss'],
})
export class TrendsComponent {
	trends = [
		{
			desc: 'How Blockchain Technology Will Fortify Real Estate Industry',
			imagePath: 'Real-Estate-Investment-Dropping.png',
		},
		{
			desc: 'Blockchain Technology Can Help Fight Cyber Crimes',
			imagePath: 'cybercrime2.png',
		},
		{
			desc:
				'Blockchain Technology Contributing To Research & Development',
			imagePath: 'businessman-business-sketch.pn',
		},
	];
}
