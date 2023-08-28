import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/data/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  weekMovie: any[] = [];
  dayMovie: any[] = [];
  genderMovie: any []=[]
  backdrop_path: string = '';
  selectedGenderId: number | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getmoviesWeek().then((response) => {
      this.weekMovie = response.data.results;
      console.log(this.weekMovie);
    });

    this.movieService.getMovieDay().then((response) => {
      this.dayMovie = response.data.results
    })

    this.getMovieByGender(35)
  }

  getCardPhoto(url: string) {
    return `https://image.tmdb.org/t/p/original/${url}`;
  }

  getMovieByGender(id: any) {
     this.selectedGenderId = id;
    this.movieService.getMovieByGender(id).then((response) => {
      this.genderMovie = response.data.results
      console.log(this.genderMovie, '#gender')
     
    })
  }

  toggleSelected(id: number) {
    if (this.isSelected(id)) {
      this.selectedGenderId = null; // Desseleciona se já estava selecionado
    } else {
      this.selectedGenderId = id; // Seleciona se não estava selecionado
    }
  }

  isSelected(id: number): boolean {
    return this.selectedGenderId === id;
  }
}
