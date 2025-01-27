import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, HomepageComponent, ToolbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'GreenShelf';

}

