import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Docker',
              icon: 'pi pi-box',
              routerLink: ['/my-notes/docker']
              // items: [
              //     [
              //         {
              //             label: 'Video 1',
              //             items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
              //         },
              //         {
              //             label: 'Video 2',
              //             items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
              //         }
              //     ],
              //     [
              //         {
              //             label: 'Video 3',
              //             items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
              //         },
              //         {
              //             label: 'Video 4',
              //             items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
              //         }
              //     ]
              // ]
          },
          {
              label: 'Docker Compose',
              icon: 'pi pi-box',
              routerLink: ['/my-notes/docker/compose']
          },
          // {
          //     label: 'Events',
          //     icon: 'pi pi-fw pi-calendar',
          //     items: [
          //         [
          //             {
          //                 label: 'Event 1',
          //                 items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
          //             },
          //             {
          //                 label: 'Event 2',
          //                 items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
          //             }
          //         ],
          //         [
          //             {
          //                 label: 'Event 3',
          //                 items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
          //             },
          //             {
          //                 label: 'Event 4',
          //                 items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
          //             }
          //         ]
          //     ]
          // }         
      ];
  }
}
