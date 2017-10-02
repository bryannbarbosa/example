import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { MainRoutingModule } from "./main-routing.module";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from './signup/signup.component';

import { CategoriesComponent } from './categories/categories.component';

@NgModule({
    imports: [
        NativeScriptModule,
        MainRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule
    ],
    declarations: [
        SigninComponent,
        SignupComponent,
        CategoriesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MainModule { }
