import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";

@Component({
    selector: "Signin",
    moduleId: module.id,
    templateUrl: "./signin.component.html"
})
export class SigninComponent implements OnInit {

  public input: any;

  public constructor(private router: RouterExtensions) {
      this.input = {
          "email": "",
          "password": ""
      }
  }

  ngOnInit(): void {
  }
}
