import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-subscriptions',
  imports: [RouterLink, ToolbarComponent, FooterComponent],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.scss'
})
export class SubscriptionsComponent {

}
