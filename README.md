# module-cards-created-dynamically
Модуль содержит скрипт динамически создаваемых карточек.



![files](./dist/img/cards.png)
<br />

## Подключение модуля
В данном репозитории точкой входа ___Webpack___ является _./src/js/script.js_.
<br /> Импортируем в него модуль со скриптом слайдера:
```javascript
// Точка вхождения Webpack: "./src/js/script.js'
"use strict";

import cards from './modules/cards';

window.addEventListener('DOMContentLoaded', () => {
    cards();
});
```

