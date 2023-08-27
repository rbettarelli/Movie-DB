import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/data/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
news: any[] = []
backdrop_path: string =''

constructor(private movieService: MovieService){}

ngOnInit(): void {

  this.movieService.getmoviesWeek().then(response => {
    this.news = response.data.results
    console.log(this.news)

  })
    
}


getCardPhoto(url: string){
  return `https://image.tmdb.org/t/p/original/${url}`

}


}
