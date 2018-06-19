import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { FullPageComponent } from './full-page/full-page.component';
import { RightComponent } from './right-side/right/right.component';
import { LeftComponent } from './left-side/left/left.component';
import { BottomComponent } from './footer/bottom/bottom.component';
import { LookupItemComponent } from './lookup-item/lookup-item.component';
import { FinishPayComponent } from './finish-pay/finish-pay.component';
import { CashComponent } from './cash/cash.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { LogoTableComponent } from './logo-table/logo-table.component';
import { LookupFinishpayComponent } from './lookup-finishpay/lookup-finishpay.component';
import { OnloadLeftComponent } from './onload-left/onload-left.component';
import { OnloadRightComponent } from './onload-right/onload-right.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

//Services
import { ItemDetailsService } from './services/item-details.service';
import { MemberidValidatorService } from './services/memberid-validator.service';


@NgModule({
  declarations: [
    AppComponent,
    FullPageComponent,
    RightComponent,
    LeftComponent,
    BottomComponent,
    LookupItemComponent,
    FinishPayComponent,
    CashComponent,
    CreditCardComponent,
    DebitCardComponent,
    GiftCardComponent,
    LogoTableComponent,
    LookupFinishpayComponent,
    OnloadLeftComponent,
    OnloadRightComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ItemDetailsService, MemberidValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
