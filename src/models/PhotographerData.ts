// src/models/PhotographerData.ts
import { Media } from './Media';
import { Photographer } from './Photographer';

export interface PhotographerData {
  photographers: Photographer[];
  media: Media[]; 
}
