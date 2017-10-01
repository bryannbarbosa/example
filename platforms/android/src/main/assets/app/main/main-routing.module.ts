import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    { path: "", component: SigninComponent },
    { path: "signup", component: SignupComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MainRoutingModule { }
