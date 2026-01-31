import { Component, EventEmitter, output, Output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { InvestInput } from "../investment-input.model";

@Component({
  selector: "app-user-input",
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
  standalone: true,
  imports: [FormsModule]
})

export class UserInputComponent {

  enteredInitialInvestment = signal("0")
  enteredAnnualInvestment = signal("0")
  enteredExpectedReturn = signal("5")
  enteredDuration = signal("10")

  calculate = output<InvestInput>()

  onCalculate() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    })
    this.enteredInitialInvestment.set("0")
    this.enteredAnnualInvestment.set("0")
    this.enteredExpectedReturn.set("5")
    this.enteredDuration.set("10")
  }
}