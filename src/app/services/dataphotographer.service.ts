import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PhotographerData } from '../../models/PhotographerData';

@Injectable({
  providedIn: 'root'
})
export class DataphotographerService {

  constructor(private httpClient: HttpClient) { }

  getPhotographers(): Observable<PhotographerData> {
    return this.httpClient.get<PhotographerData>('./assets/data/FishEyeData.json');
  }
  getPhotographer(): Observable<PhotographerData> {
    return this.httpClient.get<PhotographerData>('./assets/data/FishEyeData.json');
  }
  getPhotographerById(number: number): Observable<PhotographerData> {
    return this.httpClient.get<PhotographerData>('./assets/data/FishEyeData.json');
  }
  getTags(): Observable<PhotographerData> {
    return this.httpClient.get<PhotographerData>('./assets/data/FishEyeData.json');
  }

  getMedias(): Observable<PhotographerData> {
    return this.httpClient.get<PhotographerData>('./assets/data/FishEyeData.json');
  }
}
