import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/common/search/search.component';
import { TagsComponent } from './components/common/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitlesComponent } from './components/common/titles/titles.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InputContainerComponent } from './components/common/input-container/input-container.component';
import { InputValidationComponent } from './components/common/input-validation/input-validation.component';
import { TextInputComponent } from './components/common/text-input/text-input.component';
import { DefaultButtonComponent } from './components/common/default-button/default-button.component';
import { LoadingComponent } from './components/common/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { OrdertrackPageComponent } from './components/pages/ordertrack-page/ordertrack-page.component';
import { OrderItemsListComponent } from './components/common/order-items-list/order-items-list.component';
import { MapComponent } from './components/common/map/map.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaypalButtonComponent } from './components/common/paypal-button/paypal-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitlesComponent,
    NotFoundComponent,
    LoginPageComponent,
    RegisterPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    LoadingComponent,
    CheckoutPageComponent,
    PaymentPageComponent,
    OrdertrackPageComponent,
    OrderItemsListComponent,
    MapComponent,
    PaypalButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarRatingModule,
    RatingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoadingInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
