import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGroup } from 'src/app/models/IGroup';
import { IPassanger } from 'src/app/models/IPassanger';
import { PassangerService } from 'src/app/services/passanger.service';

@Component({
  selector: 'app-edit-passanger',
  templateUrl: './edit-passanger.component.html',
  styleUrls: ['./edit-passanger.component.css'],
})
export class EditPassangerComponent implements OnInit {
  public loading: boolean = true;
  public passangerId: string | null = null;
  public passanger: IPassanger = {} as IPassanger;
  public errorMessage: string | null = null;
  public groups: IGroup[] = [] as IGroup[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private passangerService: PassangerService,
    private router: Router
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
          this.passangerService.getAllGroups().subscribe((data) => {
            this.groups = data;
          });
        },
        (error) => {
          this.errorMessage = error;
          this.loading = false;
        }
      );
    }
  }

  public submitUpdate() {
    if (this.passangerId) {
      this.passangerService
        .updatePassanger(this.passanger, this.passangerId)
        .subscribe(
          (data) => {
            this.router.navigate(['/']).then();
          },
          (error) => {
            this.errorMessage = error;
            this.router
              .navigate([`/passanger/edit/${this.passangerId}`])
              .then();
          }
        );
    }
  }
}
