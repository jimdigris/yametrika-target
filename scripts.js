'use strict';

/* цели метрики */
(function () {
    const counter = 93767627;                                                                       // id счетчика

    const targets = [                                                                               // классы элементов на которые вешаем цели = парметру цели
        'ym-btn-header-zakazat-project',                                                            // кн "Заказать проект" в Шапке сайта
        'ym-btn-header-zakazat-project-send',                                                       // кн "Отправить" в форме Заказать проект в Шапке сайта
        'ym-btn-footer-zakazat-zvonok',                                                             // кн "Заказать звонок" в подвале сайта
        'ym-btn-contacts-send',                                                                     // кн "Отправить" в форме на странице Контакты
        'ym-btn-download-rekvizits',                                                                // скачали реквизиты на странице Контакты
        'ym-btn-one-product-zakazat',                                                               // кн "Заказать" в товарной карточке
        'ym-btn-one-product-zakazat-send',                                                          // кн "Отправить" в форме Заказать в товарной карточке
        'ym-btn-zakazat-design-project',                                                            // кн "Заказать проект" в блоке Заказать дизайн проект
        'ym-btn-zakazat-design-project-send',                                                       // кн "Отправить" в форме Заказать дизайн проект
        'ym-btn-help-vibor-send',                                                                   // кн "Отправить" в блоке Поможем выбрать лушее
        'ym-btn-help-consultation-send',                                                            // кн "Отправить" в блоке Заказать консультацию
        'ym-btn-reviews-send',                                                                      // кн "Отправить" в блоке Оставить отзыв
        'ym-btn-online-service-send',                                                               // кн "Отправить" в блоке Заказать онлайн услугу
        'ym-btn-action-send',                                                                       // кн "Отправить" в блоке Участвовать в акции
        'ym-btn-complaints-send',                                                                   // кн "Отправить" в форме на странице Жалоб и предложений
        'ym-btn-design-block',                                                                      // кн "Сотрудничать" на странице Дизайнерам
        'ym-btn-design-block-send',                                                                 // кн "Отправить" в форме на странице Дизайнерам
        'ym-btn-builders-block',                                                                    // кн "Сотрудничать" на странице Застройщикам
        'ym-btn-builders-block-send',                                                               // кн "Отправить" в форме на странице Застройщикам
        'ym-btn-dealers-block',                                                                     // кн "Стать партнером" на странице Дилерам
        'ym-btn-dealers-block-send',                                                                // кн "Отправить" в форме на странице Дилерам
        'ym-btn-calculation-send',                                                                  // кн "Отправить" в форме на странице Замер и рассчет
        'ym-btn-vk-go',                                                                             // перешли в ВК
        'ym-btn-tg-go',                                                                             // перешли в Телеграм
        'ym-btn-youtube-go',                                                                        // перешли в Ютуб
        'ym-btn-yadzen-go',                                                                         // перешли в Дзен
    ];

    const copy_targets = [                                                                          // классы элементов на которые вешаем цели = парметру цели
        'ym-copy-mail',                                                                             // скопировали почту
        'ym-copy-phone',                                                                            // скопировали телефон
    ]


    targets.forEach((target) => {                                                                   // обходим все цели для нажатия
        let elements = document.querySelectorAll(`.${target}`);                                     // находим элемент для навешивания цели

        elements.forEach((element) => {                                                                             // перебирем элементы            
            element.addEventListener('click', () => { ym(counter, 'reachGoal', target); return true; });            // вещаем цель на клик по элементу (передаваемый параметр = имени класса)
        });

    });

    copy_targets.forEach((ctarget) => {                                                              // обходим все цели для копирования
        let elements = document.querySelectorAll(`.${ctarget}`);                                     // находим элемент для навешивания цели

        elements.forEach((element) => {                                                                             // перебирем элементы            
            element.addEventListener('copy', () => { ym(counter, 'reachGoal', ctarget); return true; });            // вещаем цель копирование (передаваемый параметр = имени класса)
            element.addEventListener('contextmenu', () => { ym(counter, 'reachGoal', ctarget); return true; });     // вещаем цель пр кн мыши (передаваемый параметр = имени класса)
        });

    });
})();
/* --- цели метрики --- */