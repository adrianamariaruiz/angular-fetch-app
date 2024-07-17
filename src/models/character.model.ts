import { Info } from "./api.model"

enum Gender{
  'female'= 'Female',
  'male'= 'Male',
  'Genderless'= 'Genderless',
  'unknown'= 'unknown'
}

export interface CharacterInfo{
  info: Info
  results: Character[]
}

export interface UrlElement{
  name: string
  url: string
}

export interface Origin extends UrlElement{}
export interface Location extends UrlElement{}

export interface Character{
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: Gender
    origin: Origin,
    location: Location,
    image: string
    episode: string[]
    url: string
    created: string
  }