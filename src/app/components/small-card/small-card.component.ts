import { Component, Input } from '@angular/core';
import { MovieDataService } from 'src/app/data/dataService.service';
import { MovieService } from 'src/app/data/movie.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input()
  cardPhoto: string = '';
  @Input()
  smallCardTitle: string = '';
  @Input()
  url: string = '';
  @Input()
  Id: any = '';
  @Input()
  overview: string = '';
  @Input()
  releaseDate:string =''
  @Input()
  mediaType: string =''


  constructor(private dataService : MovieDataService, private movieService : MovieService ) {}



}
