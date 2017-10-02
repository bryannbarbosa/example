import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import * as ApplicationSettings from "application-settings";

@Component({
    selector: "Signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html"
})
export class SignupComponent implements OnInit {

    public input: any;

    public constructor(private location: Location) {
        this.input = {
            "name": "",
            "email": "",
            "matriculation": "",
            "password": ""
        }
    }

    public goBack() {
        this.location.back();
    }

    ngOnInit(): void {
    }
}
