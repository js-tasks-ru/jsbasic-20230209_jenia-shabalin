/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 */
export default class UserTable {
  constructor(rows) {
<<<<<<< HEAD
    this.elem = document.createElement("table");

    this.elem.innerHTML = `
        <thead>
=======
    this.elem = document.createElement('table');

    this.elem.innerHTML = `
      <thead>
>>>>>>> 2499aa534ecf64e23cf718c4e83fe64c756b68a8
          <tr>
            <td>Имя</td>
            <td>Возраст</td>
            <td>Зарплата</td>
            <td>Город</td>
            <td></td>
          </tr>
<<<<<<< HEAD
        </thead>
        `;
    let tableInner = rows
      .map((row) => {
        let cellsWithData = Object.values(row)
          .map((value) => `<td>${value}</td>`)
          .join("");

        return `
=======
      </thead>
    `;

    let tableInner = rows.map(row => {
      let cellsWithData = Object.values(row) // для каждого значения из объекта row
        .map(value => `<td>${value}</td>`) // обернуть его в <td>
        .join(''); // полученный массив <td>...</td> объединить в одну строку

      return `
>>>>>>> 2499aa534ecf64e23cf718c4e83fe64c756b68a8
          <tr>
            ${cellsWithData}
            <td><button>X</button></td>
          </tr>
<<<<<<< HEAD
        `;
      })
      .join("");
=======
        `; // возвращаем верстку одной строки
    }).join('');
>>>>>>> 2499aa534ecf64e23cf718c4e83fe64c756b68a8

    this.elem.innerHTML += `
      <tbody>
        ${tableInner}
      <tbody>
<<<<<<< HEAD
    `;

    this.elem.addEventListener("click", (event) => this.onClick(event));
  }

  onClick(event) {
    if (event.target.tagName != "BUTTON") {
      return;
    }

    let tr = event.target.closest("tr");

    tr.remove();
=======
    `; // оборачиваем полученные строчки в tbody

    this.elem.addEventListener('click', (event) => this.onClick(event));
>>>>>>> 2499aa534ecf64e23cf718c4e83fe64c756b68a8
  }

  onClick(event) {
    if (event.target.tagName != 'BUTTON') {
      return;
    }

    let tr = event.target.closest('tr');

    tr.remove();
  }

}
