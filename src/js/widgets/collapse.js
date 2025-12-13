export class CollapsibleContainer {
  constructor(buttonSelector, containerSelector, options = {}) {
    this.button = document.querySelector(buttonSelector);
    this.container = document.querySelector(containerSelector);
    this.content = this.container.querySelector(".collapsible-content");

    if (!this.button || !this.container || !this.content) {
      console.error("Не найдены необходимые элементы");
      return;
    }

    this.options = {
      maxHeight: options.maxHeight || 300,
      animationSpeed: options.animationSpeed || 300,
    };

    this.isOpen = false;
    this.init();
  }

  init() {
    // Настройка начальных стилей
    this.content.style.transition = `max-height ${this.options.animationSpeed}ms ease`;

    // Обработчик клика по кнопке
    this.button.addEventListener("click", () => this.toggle());

    // Если контейнер изначально открыт
    if (this.content.classList.contains("active")) {
      this.isOpen = true;
      this.updateContentHeight();
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.button.classList.add("active");
    this.content.classList.add("active");
    this.updateContentHeight();
  }

  close() {
    this.button.classList.remove("active");
    this.content.classList.remove("active");
    this.content.style.maxHeight = "0";
  }

  updateContentHeight() {
    // Вычисляем высоту контента
    const contentHeight = this.content.scrollHeight;

    // Устанавливаем максимальную высоту
    if (contentHeight > this.options.maxHeight) {
      this.content.style.maxHeight = `${this.options.maxHeight}px`;
    } else {
      this.content.style.maxHeight = `${contentHeight}px`;
    }
  }

  updateContent(newContent) {
    this.content.innerHTML = newContent;
    if (this.isOpen) {
      this.updateContentHeight();
    }
  }
}
