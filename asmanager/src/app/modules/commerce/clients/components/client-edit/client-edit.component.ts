import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  public clientForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  updateClient() {
    console.log(this.clientForm.value)
  }

  private buildForm() {
    this.clientForm = this.formBuilder.group({
        name:[null,Validators.required],
    });
  }

}
