import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

// import { NgbdDatepickerPopup } from './datepicker-popup';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  // exports: [NgbdDatepickerPopup],
  bootstrap: [AppComponent]
})

// export class NgbdDatepickerPopupModule {}
export class AppModule { }
