import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public barChartLabels: string[] = ['Java', 'JavaScript', 'Angular 4', 'Spring', 'REST', 'TypeScript', 'Node', 'SQL'];
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = false;

  public barChartData: any[] = [
    {data: [90, 85, 85, 90, 85, 85, 80, 75], label: 'Habilidades Tecnicas'}
  ];
  public barChartOptions: any = {
    scales: {
      xAxes: [{
        gridLines: {
          zeroLineColor: 'white',
          zeroLineWidth: 1,
          color: 'rgba(0, 0, 0, 0)'
        },
        ticks: {
          min: 0,
          max: 100,
          stepSize: 100
        }
      }
      ],
      yAxes: [{
        gridLines: {
          color: 'rgba(0, 0, 0, 0)'
        }
      }]
    },
    animation: {
      duration: 4000
    },
    responsive: true
  };

  constructor(private translate: TranslateService) {

    this.translate.setDefaultLang('es');

  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
