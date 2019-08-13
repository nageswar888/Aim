import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InvoiceService} from "../../common/services/invoice.service";
import {InvoicelineService} from "../../common/services/invoiceline.service";

@Component({
  selector: 'app-addinvoices',
  templateUrl: './addinvoices.component.html',
  styleUrls: ['./addinvoices.component.sass']
})
export class AddinvoicesComponent implements OnInit {
  public invoiceLineForm: FormGroup;
  public invoicelinedata;
  public invoiceForm: FormGroup;
  public submitted:boolean = false;
  public submit:boolean = false;
  public total:number=0;

  constructor(private formBuilder: FormBuilder, private invoiceservice: InvoiceService,
              private invoicelineservice:InvoicelineService) {
  }

  data = [];
  public id: boolean;

  ngOnInit() {
    this.invoiceLineForm = this.formBuilder.group({
      invoiceId: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    })
    this.invoiceForm = this.formBuilder.group({
      invoiceDate: ['', [Validators.required]],
      receivedDate: ['', [Validators.required]],
      totalAmount:['']
    })
  }

  onSubmit(value: any) {
    this.submitted = true;
     this.data.push(value);
    this.total=this.total + this.invoicelinedata.amount;
     if (this.invoiceLineForm.invalid) {
      return;
    } else {
       this.invoicelineservice.postinvoicelinedetails(value).subscribe(users => {});
      console.log(this.invoiceLineForm.value);
    }
  }

  get() {
    this.id = true
  }
  get k() {
    return this.invoiceForm.controls;
  }
  get f() {
    return this.invoiceLineForm.controls;
  }

  Onsubmitted(value) {
    this.submit = true;
     if (this.invoiceForm.invalid) {
      return;
    } else {
        this.invoiceservice.postinvoicedetails(value).subscribe(users => {});
      console.log(this.invoiceForm.value);

    }
  }
}
