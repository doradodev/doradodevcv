import {Component, Inject, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import  * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';


import {DOCUMENT} from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('container') container: any;
  public barChartLabels: string[] = ['Java', 'JavaScript', 'Angular 4', 'Spring', 'REST', 'TypeScript', 'Node', 'SQL'];
  pdf = false;

  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = false;

  public barChartData: any[] = [
    {
      data: [90, 85, 85, 90, 85, 85, 80, 75], label: 'Habilidades Tecnicas',
      backgroundColor: [
        '#f04e41',
        '#f04e41',
        '#f04e41',
        '#f04e41',
        '#f04e41',
        '#f04e41',
        '#f04e41',
        '#f04e41'
      ]
    }
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

  constructor(private translate: TranslateService,
              @Inject(DOCUMENT) private document: any) {

    this.translate.setDefaultLang('es');

  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  downloadPDF() {

    this.pdf = true;
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(this.container.nativeElement, 0, 0, () => {
      pdf.save('Christian-Dorado-CV' + new Date().getTime() + '.pdf');
      this.pdf = false;
    });

  }
}
