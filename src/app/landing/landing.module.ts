import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {} from '@angular/compiler/src/core';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [{ path: '', component: LandingPageComponent }];

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class LandingModule {}
