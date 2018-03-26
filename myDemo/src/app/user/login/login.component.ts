import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators ,AbstractControl} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public myForm:FormGroup;
    public name:string;
    public password:string;
    constructor( private fbuilder:FormBuilder) {}
    ngOnInit() {
      this.myForm = this.fbuilder.group({
         'name': [null,Validators.required],
          'password':[null, [Validators.required,Validators.minLength(4)]]
      })
    }
    public getValidatortips(formcontro:AbstractControl){
        if(formcontro.errors.required){
            return 'This filed is requried';
        }
        if (formcontro.errors.minLength){
            return 'It requires more than 4 characters';
        }
    }
}
