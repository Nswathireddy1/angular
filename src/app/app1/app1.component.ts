import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                Name : <input [value]='name'>
                <br>
                You entered : {{name}}
              `
})
export class App1Component {
    name: string = 'chinna';
}