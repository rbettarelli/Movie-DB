import { Injectable } from '@angular/core'

@Injectable ({
    providedIn: 'root'
})
export class MovieDataService {
    selectedMedia: any = null
    
    setSelectedMedia(media:any) {
       this.selectedMedia = media
    }
}