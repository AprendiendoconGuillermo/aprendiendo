import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockerRoutingModule } from './docker.routing.module';
import { DockerComponent } from './docker/docker.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { ComponentsComponent } from './components/components.component';
import { DockerComposeComponent } from './docker-compose/docker-compose.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [DockerComponent,DockerComposeComponent,ComponentsComponent],
  imports: [
    CommonModule,
    DockerRoutingModule,
		MegaMenuModule,
    TableModule
  ]
})
export class DockerModule { }
