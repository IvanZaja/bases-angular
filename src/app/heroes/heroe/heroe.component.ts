import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero( newName: string ): string {
    return this.name = newName;
  }

  changeAge( newAge: number): number  {
    return this.age = newAge;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
