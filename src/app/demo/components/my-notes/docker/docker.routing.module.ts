import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DockerComponent } from './docker/docker.component';
import { DockerComposeComponent } from './docker-compose/docker-compose.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: DockerComponent },
		{ path: 'compose', component: DockerComposeComponent }
	])],
	exports: [RouterModule]
})
export class DockerRoutingModule { }
