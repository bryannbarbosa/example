"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var auth_service_1 = require("../auth.service");
var SigninComponent = (function () {
    function SigninComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.input = {
            "email": "",
            "password": ""
        };
    }
    SigninComponent.prototype.Access = function () {
        this.authService.AuthUser(this.input);
        this.router.navigate(["categories"], { relativeTo: this.route });
    };
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: "Signin",
            moduleId: module.id,
            templateUrl: "./signin.component.html"
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, router_2.ActivatedRoute])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXlDO0FBQ3pDLDBDQUFpRDtBQUNqRCxnREFBOEM7QUFROUM7SUFJRSx5QkFBMkIsV0FBd0IsRUFBVSxNQUFjLEVBQVUsS0FBcUI7UUFBL0UsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdEcsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQTtJQUNMLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0EsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVBLGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBakJVLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7eUNBS3dDLDBCQUFXLEVBQWtCLGVBQU0sRUFBaUIsdUJBQWM7T0FKL0YsZUFBZSxDQWtCM0I7SUFBRCxzQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiU2lnbmluXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpZ25pbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGlucHV0OiBhbnk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHtcbiAgICAgICAgICBcImVtYWlsXCI6IFwiXCIsXG4gICAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiXG4gICAgICB9XG4gIH1cblxuICBBY2Nlc3MoKSB7XG5cdFx0dGhpcy5hdXRoU2VydmljZS5BdXRoVXNlcih0aGlzLmlucHV0KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjYXRlZ29yaWVzXCJdLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XG5cdH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxufVxuIl19