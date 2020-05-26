import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';

const COMMON_COMPONENTS = [HeaderComponent, FooterComponent];

@NgModule({
	declarations: [...COMMON_COMPONENTS],
	imports: [CommonModule, SidebarModule],
	exports: [...COMMON_COMPONENTS],
	providers: [],
})
export class AppCommonModule {}
