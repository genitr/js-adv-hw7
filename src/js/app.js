import { CollapsibleContainer } from "./widgets/collapse";

// Инициализация виджета после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  const collapsible = new CollapsibleContainer("#toggleBtn", "#container", {
    maxHeight: 300,
    animationSpeed: 300,
  });

  // Экспортируем для доступа из консоли
  window.collapsible = collapsible;
});
