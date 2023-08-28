import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css'],
})
export class CastComponent {
  @Input()
  castPhoto: string = '';
  @Input()
  castName: string = '';
  @Input()
  castCharacter: string = '';
}
