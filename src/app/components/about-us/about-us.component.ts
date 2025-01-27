import { Component } from '@angular/core';
import { RouterLink, } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { FooterComponent } from "../../footer/footer.component";
@Component({
  selector: 'app-about-us',
  imports: [RouterLink, MatIconModule, MatButtonModule, ToolbarComponent, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
