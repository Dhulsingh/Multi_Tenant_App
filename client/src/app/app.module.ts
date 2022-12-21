import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FacesService } from "./services/faces.service";
import { DatePipe } from "@angular/common";
import { AnnotationsService } from "./services/annotations.service";
import { ColorsService } from "./services/colors";
import { StrService } from "./services/strArray";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbTimepickerModule,
  NbToastrModule,
  NbWindowModule,
  NbCardModule,
} from "@nebular/theme";
import { authInterceptorProviders } from "./_helpers/auth.interceptor";
import { TestDataAodService } from "./services/test-data-aod.service";
import { TestDataIntrudeService } from "./services/test-data-intrude.service";
import { TestDataLoitService } from "./services/test-data-loit.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    NbCardModule,
    Ng2SmartTableModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY",
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  providers: [
    FacesService,
    DatePipe,
    ColorsService,
    StrService,
    AnnotationsService,
    authInterceptorProviders,
    TestDataAodService,
    TestDataIntrudeService,
    TestDataLoitService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
