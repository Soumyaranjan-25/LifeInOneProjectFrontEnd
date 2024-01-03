import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { headerLinks } from 'src/app/environment/headerLink';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent {
  
  
  activeTab: 'add' | 'view' = 'add';
  creditForm !: FormGroup;

  creditSources = ['Salary', 'From parents', 'Other'];
  creditDetailsList :any=[];

  dataSource = new MatTableDataSource([
    { date: '2023-01-01', amount: 100, creditFrom: 'Source 1', remark: 'Example Remark 1' },
    { date: '2023-01-02', amount: 200, creditFrom: 'Source 2', remark: 'Example Remark 2' },
    { date: '2023-01-03', amount: 150, creditFrom: 'Source 3', remark: 'Example Remark 3' },
    { date: '2023-01-04', amount: 120, creditFrom: 'Source 4', remark: 'Example Remark 4' },
    { date: '2023-01-05', amount: 180, creditFrom: 'Source 5', remark: 'Example Remark 5' },
    { date: '2023-01-06', amount: 90, creditFrom: 'Source 6', remark: 'Example Remark 6' },
    { date: '2023-01-07', amount: 210, creditFrom: 'Source 7', remark: 'Example Remark 7' },
    { date: '2023-01-08', amount: 130, creditFrom: 'Source 8', remark: 'Example Remark 8' },
    { date: '2023-01-09', amount: 250, creditFrom: 'Source 9', remark: 'Example Remark 9' },
    { date: '2023-01-10', amount: 170, creditFrom: 'Source 10', remark: 'Example Remark 10' },
    { date: '2023-01-11', amount: 120, creditFrom: 'Source 11', remark: 'Example Remark 11' },
    { date: '2023-01-12', amount: 220, creditFrom: 'Source 12', remark: 'Example Remark 12' },
    { date: '2023-01-13', amount: 190, creditFrom: 'Source 13', remark: 'Example Remark 13' },
    { date: '2023-01-14', amount: 140, creditFrom: 'Source 14', remark: 'Example Remark 14' },
    { date: '2023-01-15', amount: 200, creditFrom: 'Source 15', remark: 'Example Remark 15' },
    // Add more data as needed
  ]);
  

  displayedColumns: string[] = ['No','date', 'amount', 'creditFrom', 'remark', 'actions'];

  @ViewChild(MatPaginator, {static: false}) paginator: any;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private fb: FormBuilder,
    private snack: MatSnackBar,
    private headerService: HeaderService) {
    this.initForm();
  }


  ngOnInit() {
    this.headerService.sendLinks(headerLinks['my-balancesheet']);
  }

  ngAfterViewInit() {
    console.log(this.paginator);
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  private initForm() {
    this.creditForm = this.fb.group({
      date: [new Date(), Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      creditFrom: ['', Validators.required],
      otherCredit: [''],
      remark: ['', Validators.required]
    });
  }

  onAddMore() {
    // Implement logic to add the form data to a dynamic table
    // You can use an array to store the data and display it in the template
  }

  onSubmit() {
    if (this.creditForm.valid) {
      // Implement logic to submit the form data
      this.snack.open('The credit details have been successfully added', '', {
        duration: 3000
      })
      console.log('The credit details have been successfully added');
      this.initForm(); // Reset the form after submission
    } else {
      this.snack.open("Please fill in all the required fields !! Try again", '', {
        duration: 5000
      })
    }
  }
  editCredit(creditId : any){

  }
  deleteCredit(creditId : any){
    
  }


}
