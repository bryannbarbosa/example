import { Component, OnInit } from "@angular/core";
import * as ApplicationSettings from "application-settings";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
    selector: "Signin",
    moduleId: module.id,
    templateUrl: "./signin.component.html"
})
export class SigninComponent implements OnInit {

  public input: any;

  public constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
      this.input = {
          "email": "",
          "password": ""
      }
  }

  Access() {
		this.authService.AuthUser(this.input);
    if(ApplicationSettings.getString('token') != undefined) {
      this.router.navigate(["categories"], { relativeTo: this.route });
    }
	}

  Quit() {
    ApplicationSettings.remove('token');
  }

  ngOnInit(): void {
  }
}
