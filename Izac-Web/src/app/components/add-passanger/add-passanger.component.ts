import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGroup } from 'src/app/models/IGroup';
import { IPassanger } from 'src/app/models/IPassanger';
import { PassangerService } from 'src/app/services/passanger.service';

@Component({
  selector: 'app-add-passanger',
  templateUrl: './add-passanger.component.html',
  styleUrls: ['./add-passanger.component.css'],
})
export class AddPassangerComponent implements OnInit {
  public loading: boolean = false;
  public passanger: IPassanger = {} as IPassanger;
  public errorMessage: string | null = null;
  public groups: IGroup[] = [] as IGroup[];

  constructor(
    private passangerService: PassangerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.passangerService.getAllGroups().subscribe(
      (data) => {
        this.groups = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  public createSubmit() {
    this.passangerService.createPassanger(this.passanger).subscribe(
      (data) => {
        this.router.navigate(['/']).then();
      },
      (error) => {
        this.errorMessage = error;
        this.router.navigate(['/passanger/add']).then();
      }
    );
  }
}
