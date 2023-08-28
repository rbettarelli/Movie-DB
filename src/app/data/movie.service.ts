import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '556546c4da6ee952c5cdeae95453773a';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor() {}

  getmoviesWeek() {
    const url = `${this.apiUrl}/trending/all/week`;
    const params = {
      api_key: this.apiKey,
    };

    return axios.get(url, { params });
  }

  getMediaDetails(mediaType: string, id: string) {
    const url = `${this.apiUrl}/${mediaType}/${id}`;
    const params = {
      api_key: this.apiKey,
    };

    return axios.get(url, { params });
  }

  getMediaCast(media_type: string, id: string) {
    const url = `${this.apiUrl}/${media_type}/${id}/credits`;
    const params = {
      api_key: this.apiKey,
    };

    return axios.get(url, { params });
  }

  getMovieDay() {
    const url = `${this.apiUrl}/trending/movie/day`;
    const params = {
      api_key: this.apiKey,
    };

    return axios.get(url, { params });
  }

  getMovieByGender(gender: any) {
    const url = `${this.apiUrl}/discover/movie`
    const params = {
      api_key: this.apiKey,
      with_genres: gender
    }
    return axios.get(url, { params });
  }
  
}
