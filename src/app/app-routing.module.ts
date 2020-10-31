import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'projects', component: ProjectPageComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
