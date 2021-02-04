function cards() {
    // ...classes - rest оператор который позволит добалять различные css стили через css классы
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.parentSelector = document.querySelector(parentSelector);
            this.classes = classes; //здесь будет массив
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price; // в рублях
            this.transfer = 74; // текущий курс доллара
            this.changeToRUB(); //вызывает метод changeToRUB который вернет в this.price сконвертироавнную стоимость в руб
        }
        // метод когвертации валюты из доллара в рубль
        changeToRUB() {
            this.price = +this.price * this.transfer;
        }
        // метод создающий верстку для карточки и помещающий верстку на страницу
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                // вытащим классы из верстки через forEach
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
            <img src=${this.src}  alt=${this.alt}/>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total">
                  <span>${this.price}</span> руб/день
               </div>
            </div>
         `;
            this.parentSelector.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9, // 9 Долларов!
        '.menu .container',
        'menu__item', //css класс для обвертки карточки
        'big'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "“Премиум”"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        14, // 14 Долларов!
        '.menu .container',
        'menu__item', //css класс для обвертки карточки
    ).render();
}

export default cards;