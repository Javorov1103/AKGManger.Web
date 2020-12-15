import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private clientService: ClientService) { }

  public clientForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  updateClient() {
    // console.log(this.clientForm.value)

    if(!this.clientForm.value.name) {
        return;
    }

    this.clientService.saveClient(this.clientForm.value);

  }

  private buildForm() {
    this.clientForm = this.formBuilder.group({
      name: [null, Validators.required],
      address: [null],
      phone: [null],
      isCompany: ['']
    });
  }

}
