import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule,Headers } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import{ LoginComponent } from './login/login.component';
import { MdInputModule,
        MdCheckboxModule,
        MdButtonModule,
        MdToolbarModule,
        MdMenuModule,
        MdSidenavModule,
        MdDialogModule,
        MdCardModule,
        MdGridListModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { DashboardComponent , DialogCreateBox } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ProjectComponent , DialogCreateBoxLabel } from './project/project.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatBoxComponent } from './_directives/index';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    DialogCreateBox,
    ProjectComponent,
    DialogCreateBoxLabel,
    ChatPageComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdSidenavModule,
    MdDialogModule,
    MdGridListModule,
    MdCardModule,
    // Headers,
    RouterModule.forRoot([
      { path: 'login/:id', component: LoginComponent },
      { path: '', component: HomeComponent },
      { path : 'register', component:RegisterComponent},
      { path: 'dashboard',component:DashboardComponent , canActivate:[AuthGuard]},
      { path: 'project/:projid' , component:ProjectComponent},
      { path: 'chat', component:ChatPageComponent},

    ]),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[DialogCreateBox, DialogCreateBoxLabel]
})
export class AppModule { }
