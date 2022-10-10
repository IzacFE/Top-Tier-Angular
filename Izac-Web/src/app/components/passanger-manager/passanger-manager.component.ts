import { Component, OnInit } from '@angular/core';
import { IPassanger } from 'src/app/models/IPassanger';
import { PassangerService } from 'src/app/services/passanger.service';

@Component({
  selector: 'app-passanger-manager',
  templateUrl: './passanger-manager.component.html',
  styleUrls: ['./passanger-manager.component.css'],
})
export class PassangerManagerComponent implements OnInit {
  public loading: boolean = false;
  public passangers: IPassanger[] = [];
  public errorMessage: string | null = null;

  constructor(private passangerService: PassangerService) {}

  ngOnInit(): void {
    this.loading = true;
    this.passangerService.getAllPassangers().subscribe(
      (data) => {
        this.passangers = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
}
