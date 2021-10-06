import { NgModule } from "@angular/core";

@NgModule({})

export class UserIdentityModel {
    IsAuthenticated!: boolean;
    Name!: string;
    Id!: string;
    PhoneNumber!: string;
    EmailConfirmed!: boolean;
    UserName!: string;
};