"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ApplicationSettings = require("application-settings");
var AuthService = (function () {
    function AuthService(http, options) {
        this.http = http;
        this.options = options;
        this.BaseUrl = 'http://192.168.0.104:4000/api/';
    }
    AuthService.prototype.AuthUser = function (user) {
        var _this = this;
        var req = this.http.post(this.BaseUrl + 'authentication', user)
            .subscribe(function (res) {
            if (res.json().success) {
                console.log(res);
                _this.StoreToken(res.json().response);
                return true;
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    AuthService.prototype.StoreToken = function (token) {
        if (ApplicationSettings.getString('token') === undefined) {
            ApplicationSettings.setString('token', token);
            this.UserToken = token;
            this.ConfigHeaders();
        }
        else {
            ApplicationSettings.remove('token');
            ApplicationSettings.setString('token', token);
            this.UserToken = token;
            this.ConfigHeaders();
        }
    };
    AuthService.prototype.isConnected = function () {
        if (ApplicationSettings.getString('token') != undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.ConfigHeaders = function () {
        this.options = new http_1.RequestOptions({
            headers: new http_1.Headers({
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + this.UserToken
            })
        });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, http_1.RequestOptions])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE4RDtBQUM5RCwwREFBNEQ7QUFHNUQ7SUFLRyxxQkFBb0IsSUFBVSxFQUFVLE9BQXVCO1FBQTNDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUhqRSxZQUFPLEdBQVcsZ0NBQWdDLENBQUM7SUFHa0IsQ0FBQztJQUVwRSw4QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUFiLGlCQWVBO1FBYkMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7YUFDOUQsU0FBUyxDQUNWLFVBQUEsR0FBRztZQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsS0FBSztRQUVkLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3pELG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBRUgsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFFSCxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxJQUFJLGNBQU8sQ0FBQztnQkFDbkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUzthQUM1QyxDQUFDO1NBQ0gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXhEVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBTWdCLFdBQUksRUFBbUIscUJBQWM7T0FMckQsV0FBVyxDQTJEdkI7SUFBRCxrQkFBQztDQUFBLEFBM0RELElBMkRDO0FBM0RZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cblx0QmFzZVVybDogc3RyaW5nID0gJ2h0dHA6Ly8xOTIuMTY4LjAuMTA0OjQwMDAvYXBpLyc7XG4gIFx0VXNlclRva2VuOiBzdHJpbmc7XG5cbiAgXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgb3B0aW9uczogUmVxdWVzdE9wdGlvbnMpIHsgfVxuXG4gIFx0QXV0aFVzZXIodXNlcikge1xuXG4gICAgY29uc3QgcmVxID0gdGhpcy5odHRwLnBvc3QodGhpcy5CYXNlVXJsICsgJ2F1dGhlbnRpY2F0aW9uJywgdXNlcilcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICByZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmpzb24oKS5zdWNjZXNzKSB7XG4gICAgICAgIFx0Y29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICB0aGlzLlN0b3JlVG9rZW4ocmVzLmpzb24oKS5yZXNwb25zZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VyZWRcIik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIFN0b3JlVG9rZW4odG9rZW4pIHtcblxuICAgIGlmIChBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygndG9rZW4nKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygndG9rZW4nLCB0b2tlbik7XG4gICAgICB0aGlzLlVzZXJUb2tlbiA9IHRva2VuO1xuICAgICAgdGhpcy5Db25maWdIZWFkZXJzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygndG9rZW4nLCB0b2tlbik7XG4gICAgICB0aGlzLlVzZXJUb2tlbiA9IHRva2VuO1xuICAgICAgdGhpcy5Db25maWdIZWFkZXJzKCk7XG4gICAgfVxuXG4gIH1cblxuICBpc0Nvbm5lY3RlZCgpIHtcbiAgICBpZihBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygndG9rZW4nKSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBDb25maWdIZWFkZXJzKCkge1xuICAgIHRoaXMub3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5Vc2VyVG9rZW5cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuXG59XG4iXX0=