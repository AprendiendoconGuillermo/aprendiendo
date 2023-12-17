
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'docker',  loadChildren: () => import('./docker/docker.module').then(m => m.DockerModule) },
    ])],
    exports: [RouterModule]
})
export class MyNotesRoutingModule { }