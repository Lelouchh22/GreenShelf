import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { AccountComponent } from "./faq-components/account/account.component";
import { OrdersComponent } from "./faq-components/orders/orders.component";
import { PaymentsComponent } from "./faq-components/payments/payments.component";

@Component({
  selector: 'app-faq',
  imports: [CommonModule, MatExpansionModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, AccountComponent, OrdersComponent, PaymentsComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {

  selectedSection: string  = 'account';
  selectSection(section: string) {
    this.selectedSection = section;
  }
}
