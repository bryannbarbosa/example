import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from './signup/signup.component';
import { CategoriesComponent } from './categories/categories.component';

import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
{
    path: "",
    children: [
      { path: "", component: SigninComponent },
      { path: "signup", component: SignupComponent },
      { path: "categories", component: CategoriesComponent, canActivate: [AuthGuardService] }
    ]
},

];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class MainRoutingModule { }
