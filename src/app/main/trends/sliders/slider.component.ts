import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperComponent } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
	trends: any = [
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
			imagePath: 'businessman-business-sketch.png',
		},
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
			imagePath: 'businessman-business-sketch.png',
		},
	];

	direction: string;
	slidesPerView: any = 'auto';
	paginationRequired: boolean = false;
	freeMode: boolean = false;

	public config: SwiperConfigInterface = {};

	@ViewChild(SwiperComponent, { static: false })
	componentRef: SwiperComponent;

	constructor() {}

	ngOnInit() {
		this.config = {
			slidesPerView: this.slidesPerView,
			direction: 'horizontal',
			spaceBetween: 40,
			navigation: true,
			keyboard: true,
			mousewheel: false,
			scrollbar: false,
			pagination: this.paginationRequired,
			freeMode: this.freeMode,
			observer: true,
			slidesPerGroup: 1,
		};
	}
}
