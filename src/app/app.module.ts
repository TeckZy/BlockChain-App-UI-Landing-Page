import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
	SwiperConfigInterface,
	SwiperModule,
	SWIPER_CONFIG,
} from 'ngx-swiper-wrapper';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './app-common/app-common.module';
import { MainComponent } from './main/main.component';
import { OurServicesComponent } from './main/our-services/our-services.component';
import { TrendsComponent } from './main/trends/trends.component';
import { ContactUsComponent } from './main/contact-us/contact-us.component';
import { SliderComponent } from './main/trends/sliders/slider.component';

const APP_MODULES = [AppCommonModule];

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

const MODULE_COMPOENT = [
	MainComponent,
	OurServicesComponent,
	TrendsComponent,
	ContactUsComponent,
	SliderComponent,
];

@NgModule({
	declarations: [AppComponent, ...MODULE_COMPOENT],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		SwiperModule,
		SidebarModule.forRoot(),
		...APP_MODULES,
	],
	providers: [
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
