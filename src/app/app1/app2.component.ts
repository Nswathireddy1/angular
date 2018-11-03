import { Component } from '@angular/core';

@Component({
    selector: 'my-app2',
    template: `
    Name : <input [value]='name' (input)='name = $event.target.value'>

                <br>
                You entered : {{name}}
              `
})
export class App2Component {
    name: string = 'chinnaa';
}
