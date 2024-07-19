import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { firstValueFrom, Observable } from 'rxjs';
import { Character } from '../../../models/character.model';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsyncPipe, CharacterCardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent {
  private charactersService = inject(CharactersService);
  characterInfo:Record<string, Character> = {}
  characters$: Observable<Character[]>= this.charactersService.getCharacters();

  async makeApiCall(url: string){
    let character = await firstValueFrom(this.charactersService.getCharacterInfo(url))
    this.characterInfo[character.id] = character
  };
  
}
