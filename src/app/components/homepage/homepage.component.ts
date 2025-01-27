import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { RouterLink, } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { FooterComponent } from "../../footer/footer.component";


@Component({
  selector: 'app-homepage',
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink, MatCardModule, ToolbarComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  animations: [
    trigger('hoverAnimation', [
      state('hovered', style({
        transform: 'scale(1.10)'
      })),
      state('notHovered', style({
        transform: 'scale(1)'
      })),
      transition('notHovered <=> hovered', animate('1ms ease-in-out'))
    ]),
    trigger('clickAnimation', [

      transition('notClicked <=> clicked', animate('400ms ease-in-out'))
    ])
  ]
})

export class HomepageComponent {
  @Input() slides: { src: string; title: string; subtitle: string }[] = [];
  @Input() ebook: { src: string; title: string; subtitle: string }[] = [];

  currentIndex: number = 0;
  currentIndexEbook: number = 0;

  intervalTime: number = 2500; // 
  
  isHovered: boolean = false;
  isClicked: boolean = false;


  

  ngOnInit() {
    
    this.slides = [
      { src: 'assets/1599948.jpg', title: 'A portal for readers', subtitle: 'Find new books' },
      { src: 'assets/dcFwnop.jpg', title: 'Ecology', subtitle: 'We care about our planet' }
    ];

    this.ebook = [
      { src: 'assets/hungergames.jpg', title: 'Hunger Games', subtitle: 'The Hunger Games is a dystopian novel set in a future society known as Panem, which is divided into 12 districts and controlled by a wealthy and oppressive Capitol. Every year, the Capitol selects a boy and girl from each district to participate in a televised fight to the death called the Hunger Games. The story follows Katniss Everdeen, a girl from District 12 who volunteers to take her sister’s place in the deadly competition. Throughout the Games, Katniss must navigate alliances, survival tactics, and her own moral dilemmas as she becomes a symbol of rebellion against the Capitol’s tyranny. The novel explores themes of survival, sacrifice, and resistance against oppressive power.' },
      { src: 'assets/Il signore degli anelli.jpg', title: 'The Lord Of The Rings', subtitle: 'The Lord of the Rings is an epic high-fantasy trilogy set in the fictional world of Middle-earth. The story follows the journey of a young hobbit named Frodo Baggins, who is tasked with destroying a powerful and dangerous artifact, the One Ring, to prevent the dark lord Sauron from conquering the world. Frodo is joined by a group of companions, including humans, elves, dwarfs, and other hobbits, as they face numerous dangers and challenges. The trilogy explores themes of friendship, sacrifice, power, and the struggle between good and evil, culminating in the epic battle to save Middle-earth.' },
      { src: 'assets/it.jpg', title: 'IT', subtitle: 'IT is a horror novel that revolves around a group of seven misfit children, who are terrorized by an ancient, shape-shifting entity that feeds on their fears. The creature, known as "IT," primarily takes the form of a killer clown named Pennywise, but it can assume many forms to manipulate and prey on the children’s deepest anxieties. The story alternates between two timelines: one when the children face the entity in their youth, and another when they return as adults to confront it once again. IT explores themes of friendship, courage, trauma, and the power of facing everyones fears.' },
      { src: 'assets/agilemangusta.jpg', title: 'The Agile Mongoose', subtitle: 'The Agile Mongoose is a guidebook to understanding agile methodologies, specifically in the context of problem-solving and decision-making. The book uses a narrative approach, where the agile principles are presented through the metaphor of a mongoose, a clever and quick animal that adapts and acts decisively in various situations. The story teaches how to overcome obstacles and achieve goals through adaptability, speed, and effective teamwork. The principles of agility are explored not just from a business perspective, but also as a mindset for everyday challenges.' },

    ];

    this.startAutoSlide();
    this.startAutoSlideEbook();
  }
  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, this.intervalTime);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }


  startAutoSlideEbook() {
     setInterval(() => {
      this.nextSlideEbook();
   }, this.intervalTime);
 }


 nextSlideEbook() {
   this.currentIndexEbook = (this.currentIndexEbook + 1) % this.ebook.length;
   }


}
