import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../data-model/user';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  price = signal(10);
  quantity = signal(5);
  totalCost = computed(() => this.price() * this.quantity());

  private costEffect = effect((onCleanup) => {
    const el = document.querySelector("#totalCost")
    if(this.totalCost() > 100) {
      el?.animate(
        [
          { transform: "rotate(0) scale(1)" },
          { transform: "rotate(180deg) scale(2)" },
          { transform: "rotate(360deg) scale(1)" },
        ],
        { duration: 3000, iterations: Infinity, }
      )
    } else {
      el?.getAnimations().forEach(e => e.cancel())
    }

    onCleanup(() => {
      el?.getAnimations().forEach(e => e.cancel())
    });
  })

  birthDate = new Date('2024-03-02');

  onQuantityAdd(qty: number) {
    this.quantity.update((current) => current+qty)
  }

  handleUserResponse(user: User) {
    console.log(user.contact?.value);
  }

}
