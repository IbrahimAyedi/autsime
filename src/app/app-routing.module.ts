import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component'; // Import the CreateAccountComponent
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { CantactComponent } from './cantact/cantact.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },

  {
    path: 'create-account', component: CreateAccountComponent, // Add route for CreateAccountComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forget-password', component: ForgetPasswordComponent
  },
  { 
    path: 'Parent', component: ParentComponent
  },
  { 
    path: 'Child', component: ChildComponent
  },
  { 
    path: 'Questionnaire', component: QuestionnaireComponent
  },
  { 
    path: 'cantact', component: CantactComponent 
  },
  { 
    path: 'whoWeAre', component: WhoWeAreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
