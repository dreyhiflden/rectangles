/**
 * Created by Dmytro on 13.10.2016.
 */

'use strict';

const rectangle1 = getRandomRectangle(),
      rectangle2 = getRandomRectangle();

document.write (`
  Перший прямокутник<br>
  x1:${rectangle1.x1}<br>
  y1:${rectangle1.y1}<br>
  x2:${rectangle1.x2}<br>
  y2:${rectangle1.y2}<br>
                     <br>
  Другий прямокутник<br>
  x1:${rectangle2.x1}<br>
  y1:${rectangle2.y1}<br>
  x2:${rectangle2.x2}<br>
  y2:${rectangle2.y2}<br>
  <br>
`);

if (isIntersect(rectangle1, rectangle2)) {
    alert('Прямокутники перетинаються!');

    const rectangle3 = {
        x1: Math.max(Math.min(rectangle1.x1, rectangle1.x2), Math.min(rectangle2.x1, rectangle2.x2)),
        y1: Math.max(Math.min(rectangle1.y1, rectangle1.y2), Math.min(rectangle2.y1, rectangle2.y2)),
        x2: Math.min(Math.max(rectangle1.x1, rectangle1.x2), Math.max(rectangle2.x1, rectangle2.x2)),
        y2: Math.min(Math.max(rectangle1.y1, rectangle1.y2), Math.max(rectangle2.y1, rectangle2.y2)),
    };

    document.write(`
    Третій прямокутник<br>
    x1:${rectangle3.x1}<br>
    y1:${rectangle3.y1}<br>
    x2:${rectangle3.x2}<br>
    y2:${rectangle3.y2}<br>
    <br>
`);

    const ellipse = {
        x : (rectangle3.x2 - rectangle3.x1) / 2 + rectangle3.x1,
        y : (rectangle3.y2 - rectangle3.y1) / 2 + rectangle3.y1,
        rx: Math.abs((rectangle3.x2 - rectangle3.x1) / 2),
        ry: Math.abs((rectangle3.y2 - rectangle3.y1) / 2),
    };

    let array = [];

    while (array.length < 10) {
        const point                = getRandomPoint(),
              ifPointInsideEllipse = checkIfPointInsideEllipse(point, ellipse);

        if (ifPointInsideEllipse ) {
            array.push(point)
        }
    }

    document.write(JSON.stringify(array));

} else {
    alert('Прямокутники не перетинаються!');
}

function checkIfPointInsideEllipse (point, ellipse) {
    const partX = Math.pow((point.x - ellipse.x), 2) / Math.pow(ellipse.rx, 2),
          partY = Math.pow((point.y - ellipse.y), 2) / Math.pow(ellipse.ry, 2);

    return partX + partY <= 1;
}

function getRandomPoint () {
    return {
        x: getRandomCoordinate(),
        y: getRandomCoordinate(),
    };
}

function getRandomCoordinate () {
    return Math.round(Math.random() * 100);
}

function getRandomRectangle () {
    var   x1 = getRandomCoordinate(),
          y1 = getRandomCoordinate(),
          x2 = getRandomCoordinate(),
          y2 = getRandomCoordinate();

    return {
          x1    : x1,
          y1    : y1,
          x2    : x2,
          y2    : y2,
          left  : Math.min(x1, x2),
          right : Math.max(x1, x2),
          top   : Math.max(y1, y2),
          bottom: Math.min(y1, y2),
    }
}

function isIntersect(rectangle1, rectangle2) { // Перевірка на НЕ перетинання
    return !(
           rectangle1.left   > rectangle2.right
        || rectangle1.right  < rectangle2.left
        || rectangle1.top    < rectangle2.bottom
        || rectangle1.bottom > rectangle2.top
    );
}