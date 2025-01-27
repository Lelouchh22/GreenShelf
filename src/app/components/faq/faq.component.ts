import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-faq',
  imports: [RouterOutlet,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatButtonModule,RouterLink, ToolbarComponent, FooterComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {

}
