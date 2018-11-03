import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  template: `
    <h1 [textContent]="'Name: ' + person"></h1>

    <button (click)="person = male" [disabled]="person.sex=='m'">Male</button>
    <button (click)="person = female" [disabled]="person.sex=='f'">Female</button>

    <p><img [src]="person.photo" [alt]="person.name" [title]="person.name"></p>
    <p [hidden]="!person.rating">
      Rating: <span [innerHTML]="'&#10032;'.repeat(person.rating)"></span>
    </p>`
})
export class PropertyComponent {
  female = {
    name: 'swathi',
    sex: 'f',
    rating: 4,
    photo: '../../assets/image/swathi.jpg'
  };
  male = {
    name: 'mahi',
    sex: 'm',
    photo: '../../assets/image/mahesh.jpg'
  };
  person: any = this.male;
}
