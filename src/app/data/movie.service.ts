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

        api_key: this.apiKey
      
    };
    
    return axios.get(url, { params });
  }

  getMediaDetails(mediaType: string, id: string) {
    const url = `${this.apiUrl}/${mediaType}/${id}`;
    const params = {
      api_key: this.apiKey
    };

    return axios.get(url, { params });
  }




}
