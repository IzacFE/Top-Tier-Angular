import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroup } from 'src/app/models/IGroup';
import { IPassanger } from 'src/app/models/IPassanger';
import { PassangerService } from 'src/app/services/passanger.service';

@Component({
  selector: 'app-view-passanger',
  templateUrl: './view-passanger.component.html',
  styleUrls: ['./view-passanger.component.css'],
})
export class ViewPassangerComponent implements OnInit {
  public loading: boolean = true;
  public passangerId: string | null = null;
  public passanger: IPassanger = {} as IPassanger;
  public errorMessage: string | null = null;
  public group: IGroup = {} as IGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private passangerService: PassangerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.passangerId = param.get('passangerId');
    });
    if (this.passangerId) {
      this.loading = true;
      this.passangerService.getPassanger(this.passangerId).subscribe(
        (data) => {
          this.passanger = data;
          this.loading = false;
          this.passangerService.getGroup(data.groupId).subscribe((data) => {
            this.group = data;
          });
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

  public isNotEmpty() {
    return (
      Object.keys(this.passanger).length > 0 &&
      Object.keys(this.group).length > 0
    );
  }
}
