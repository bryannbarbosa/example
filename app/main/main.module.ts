import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { MainRoutingModule } from "./main-routing.module";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        NativeScriptModule,
        MainRoutingModule
    ],
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MainModule { }