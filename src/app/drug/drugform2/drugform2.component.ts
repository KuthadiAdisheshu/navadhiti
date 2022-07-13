import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-drugform2',
  templateUrl: './drugform2.component.html',
  styleUrls: ['./drugform2.component.scss']
})
export class Drugform2Component implements OnInit {
  gender=['Male','Female']
  public form!: FormGroup;
  message: String = '';
  className = 'd-none';
  isProcessing = false;

  constructor(
    private fb:FormBuilder,
    private auth:AuthserviceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      birthday: new FormControl(null,Validators.required),
      
      sex:new FormControl(null,Validators.required),
     
      Weight:new FormControl(null,Validators.required),
      
    })
  }

  save(){
    this.isProcessing = true;
   const data = this.form.value;
   this.auth.drugforms2(data).subscribe((res)=>{
     console.log(res);
     if (res.success) {
          
       this.isProcessing = false;
       Swal.fire(
         'Drugform2 details created Sucessfully!',
         
         'success'
       );
 
       this.message = 'Account created';
       this.className = 'alert alert-success';
     
       this.form.reset();
 
       // reset logic
     } else {
       this.isProcessing = false;
       Swal.fire((this.message = res.message));
 
       this.className = 'alert alert-danger';
       this.form.reset();
 
       // reset logic
     }
   },
   (err) => {
     this.isProcessing = false;
     this.message = 'server error';
     Swal.fire('Oops!', 'Server error', 'error');
     this.className = 'alert alert-danger';
     this.form.reset();
     // reset logic
   }
   )
 }
}
