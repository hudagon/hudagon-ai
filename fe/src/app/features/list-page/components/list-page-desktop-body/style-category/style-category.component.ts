import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-style-category',
  templateUrl: './style-category.component.html',
  styleUrls: ['./style-category.component.css']
})
export class StyleCategoryComponent implements AfterViewInit {
  isViewLoaded: boolean = true;

  ngAfterViewInit(): void {
    const accordions = document.getElementsByClassName("wrapper__accordion") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function () {
        accordions[i].classList.toggle("toggle");
        const accordionsPanel = accordions[i].nextElementSibling as HTMLElement;
        if (accordionsPanel) {
          accordionsPanel.classList.toggle("toggle");
          if (accordionsPanel.style.maxHeight) {
            accordionsPanel.style.maxHeight = "";
          } else {
            accordionsPanel.style.maxHeight = accordionsPanel.scrollHeight + "px";
          }
        }
      });
    }
  }

  addToFilter($event: MouseEvent) {
    $event.stopPropagation();
  }
}
