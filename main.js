/**
 * Created by Dmytro on 13.10.2016.
 */

'use strict';

let rectangle1 = {
    x1:40,
    y1:80,
    x2:90,
    y2:60,
};

let rectangle2 = {
    x1:60,
    y1:70,
    x2:110,
    y2:30,
};

let r1 = {
    left: Math.min(rectangle1.x1, rectangle1.x2),
    right: Math.max(rectangle1.x1, rectangle1.x2),
    top: Math.max(rectangle1.y1, rectangle1.y2),
    bottom: Math.min(rectangle1.y1, rectangle1.y2),
};

let r2 = {
    left: Math.min(rectangle2.x1, rectangle2.x2),
    right: Math.max(rectangle2.x1, rectangle2.x2),
    top: Math.max(rectangle2.y1, rectangle2.y2),
    bottom: Math.min(rectangle2.y1, rectangle2.y2),
};

function isIntersect() {
    if (r1.left > r2.right || r1.right < r2.left || r1.top < r2.bottom || r1.bottom > r2.top) { // Перевірка на НЕ перетин прямокутників.
        return false; // Якщо не перетинається, повертаємо false
    }

    else {
        return true; // Якщо перетинається, повертаємо true
    }
}

if (isIntersect() == true) {
    alert('Прямокутники перетинаються!');
}
else {
    alert('Прямокутники не перетинаються!');
}

