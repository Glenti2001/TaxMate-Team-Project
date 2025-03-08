import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Deadline {
  name: string;
  condition: string;
  dueDate: Date;
  daysRemaining: number;
}

@Component({
  selector: 'app-deadlines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.scss']
})
export class DeadlinesComponent implements OnInit {
  deadlines: Deadline[] = [];
  today: Date = new Date(); // Use the current date

  ngOnInit(): void {
    this.calculateDeadlines();
  }

  calculateDeadlines(): void {
    const tatimiFitimi = new Date(this.today.getFullYear(), 2, 31);
    if (this.today > tatimiFitimi) tatimiFitimi.setFullYear(this.today.getFullYear() + 1);

    const tvshDate = new Date(this.today);
    const quarterMonth = Math.floor(this.today.getMonth() / 3) * 3 + 2;
    tvshDate.setMonth(quarterMonth, 20);
    if (tvshDate < this.today) tvshDate.setMonth(tvshDate.getMonth() + 3);

    const kontributetDate = new Date(this.today);
    kontributetDate.setMonth(kontributetDate.getMonth() + 1, 20);

    const taksatLokale = new Date(this.today.getFullYear(), 2, 31);
    if (this.today > taksatLokale) taksatLokale.setFullYear(this.today.getFullYear() + 1);

    const tatimiPagat = new Date(this.today);
    tatimiPagat.setMonth(tatimiPagat.getMonth() + 1, 20);

    this.deadlines = [
      { name: 'Tatimi mbi Fitimin', condition: '31 March', dueDate: tatimiFitimi, daysRemaining: this.calculateDaysRemaining(tatimiFitimi) },
      { name: 'TVSH', condition: 'Every 3 months', dueDate: tvshDate, daysRemaining: this.calculateDaysRemaining(tvshDate) },
      { name: 'Kontributet Sociale', condition: 'Every month after the 20th of next month', dueDate: kontributetDate, daysRemaining: this.calculateDaysRemaining(kontributetDate) },
      { name: 'Taksat Lokale', condition: 'Every year until 31 March', dueDate: taksatLokale, daysRemaining: this.calculateDaysRemaining(taksatLokale) },
      { name: 'Tatimi mbi Pagat', condition: 'Every month after the 20th of next month', dueDate: tatimiPagat, daysRemaining: this.calculateDaysRemaining(tatimiPagat) }
    ];
  }

  calculateDaysRemaining(dueDate: Date): number {
    const timeDiff = dueDate.getTime() - this.today.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }
}
