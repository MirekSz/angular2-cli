import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<a routerLink="/operators">operators</a> 
            <a routerLink="/init">empty</a> 
            <router-outlet></router-outlet>`
})
export class AppComponent {
}
