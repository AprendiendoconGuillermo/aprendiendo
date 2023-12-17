import { Component, OnInit } from '@angular/core';

interface Product {
    description: string;
    command: string;
}

@Component({
    selector: 'app-docker',
    templateUrl: './docker.component.html',
    styleUrls: ['./docker.component.scss'],
})
export class DockerComponent implements OnInit {
    products!: Product[];

    constructor() {}

    ngOnInit() {
        this.products = [
            {
                description: 'Descagar una imagen',
                command: 'docker pull <imagen>',
            },
            {
                description: 'Construir una imagen',
                command: 'docker image -t <nombre-de-la-imagen> .',
            },
            {
                description: 'Listar las imágenes',
                command: 'docker image ls',
            },
            {
                description: 'Ver el historial de creación de una imagen',
                command: 'docker history <id>',
            },
            {
                description: 'Crear una nueva imagen a partir de otra',
                command:
                    'docker image tag <image:version> <nuevo-nombre:nuevo-tag>',
            },
            {
                description: 'Subir una imagen al repositorio',
                command: 'docker push <imagen:version>',
            },
            {
                description: 'Ejecutar un contenedor en primer plano',
                command: 'docker container run <imagen>',
            },
            {
                description: 'Ejecutar un contenedor en segundo plano',
                command: 'docker container run -d <imagen>',
            },
            {
                description:
                    'Ejecutar un contenedor en segundo plano de forma iterativa',
                command: 'docker container run -it -d <imagen>',
            },
            {
                description:
                    'Ejecutar un contenedor en primer plano de forma iterativa y con acceso a la misma',
                command: 'docker container run -it <imagen> bash',
            },
            {
                description:
                    'Listar los contenedores en uso o activos',
                command: 'docker container ps',
            },
            {
                description:
                    'Listar todos los contenedores activose inactivos',
                command: 'docker container ps -a',
            },
            {
                description:
                    'Detener un contendor',
                command: 'docker container stop <container id>',
            },
            {
                description:
                    'Matar un contenedor',
                command: ' docker container kill <container id>',
            },
            {
                description:
                    'Iniciar un contenedor',
                command: 'docker container start <container id>',
            },
            {
                description:
                    'Ver los logs de un contenedor',
                command: 'docker container logs <container id> ',
            },
            {
                description:
                    'Eliminar un contenedor',
                command: 'docker container rm -f <container id>',
            },
            {
                description:
                    'Crear un volumen',
                command: 'docker volume create <name>',
            },
            {
                description:
                    'Listar los volúmenes',
                command: 'docker volume ls',
            },
            {
                description:
                    'Eliminar un volumen',
                command: 'docker volume rm <name>',
            },
            {
                description:
                    'Ejecutar un contenedor asignando un volumen',
                command: 'docker container run -d -v <volumen-origen:volumen-destino> <imagen:version>',
            },
            {
                description:
                    'Crear una red bridge',
                command: 'docker network create --driver bridge <nombre>',
            },
            {
                description:
                    'Listar las redes',
                command: 'docker network ls',
            },
            {
                description:
                    'Eliminar una red',
                command: 'docker network rm',
            },
            {
                description:
                    'Ejecutar un contenedor y asignar una red',
                command: 'docker container run -d --network=<red> <imagen>',
            },
            // {
            //     description:
            //         '',
            //     command: 'docker container',
            // },
            // {
            //     description:
            //         '',
            //     command: 'docker container',
            // },
            // {
            //     description:
            //         '',
            //     command: 'docker container',
            // },
            // {
            //     description:
            //         '',
            //     command: 'docker container',
            // },
            // {
            //     description:
            //         '',
            //     command: 'docker container',
            // },
        ];
    }
}
