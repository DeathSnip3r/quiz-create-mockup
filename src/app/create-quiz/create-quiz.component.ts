import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent {
  @ViewChild('#Create-Quiz-Basic') tab_basic: ElementRef<HTMLLIElement> | undefined;
  toggled_Basic = false;

  toggle_Basic(){
    if (this.toggled_Basic){
      this.tab_basic?.nativeElement.classList.add('is-active');
    }
  }

}
