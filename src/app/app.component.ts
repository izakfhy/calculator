import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { lastValueFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  first = 0;
  second = 0;

  message: any;

  constructor(private cs: CalculatorService)
  {

  }

  async Submit(method:string)
  {
    try
    {
      let res = this.cs.Submit(this.first,this.second, method);
      let result = await lastValueFrom(res);
      this.message = result;
    }
    catch(error: any)
    {
      this.message = error.message;
    }
  }


}
