import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing.module';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ToastrModule.forRoot(),
        
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
       
    ],
    providers: [LoginService]
})
export class LoginModule { }
