//object created
const birthdayObj = [
  {
    "name": "ahsan ansari",
    "birthday": "10/02/1978"
  },
  {
    "name": "juned khan",
    "birthday": "08/02/1978"
  },
  {
    "name": "shivam patil",
    "birthday": "12/05/1999"
  },
  {
    "name": "atiulla shaikh",
    "birthday": "10/07/1999"
  },
  {
    "name": "nilesh vishwakarma",
    "birthday": "05/02/1999"
  },
  {
    "name": "omkar valve",
    "birthday": "05/29/2000"
  },
  {
    "name": "ruby mary",
    "birthday": "11/15/2022"
  },
  {
    "name": "nilesh pawar",
    "birthday": "11/08/2022"
  },
  {
    "name": "dilshad khan",
    "birthday": "11/20/2022"
  },
  {
    "name": "sangeeta pujari",
    "birthday": "11/20/2022"
  },
  {
    "name": "inayat khan",
    "birthday": "11/20/2022"
  },
  {
    "name": "virat kohli",
    "birthday": "11/20/2022"
  },
  {
    "name": "rohit sharma",
    "birthday": "11/20/2022"
  },
  {
    "name": "hardik pandya",
    "birthday": "11/20/2022"
  },
  {
    "name": "salman khan",
    "birthday": "11/26/1965"
  }
];

const birthList = document.querySelectorAll('.birth-names'),
  year = document.querySelector('.year-input'),
  textarea = document.querySelector('#textarea'),
  objJson = JSON.stringify(birthdayObj, null, 2),
  submitBtn = document.querySelector('.submit'),
  form = document.querySelector('form');

// adding json data in textarea
textarea.value = objJson;

const blank = () => {
  birthList.forEach(li => {
    li.innerHTML = '';
  });
}

// submit function to get result
form.addEventListener('submit', (e) => {
  e.preventDefault();
  blank();
  birthDate(year.value);
})

const birthDate = (dateInput) => {
  const date = new Date();
  let arr = [];
  // function to get same year objects
  birthdayObj.forEach(obj => {
    const [month, day, bYear] = obj.birthday.split('/');
    if (Number(dateInput) === Number(bYear)) {
      arr.push(obj);
    }
  });

  // function to add filtered data in days
  arr.forEach(obj => {
    const [month, day, bYear] = obj.birthday.split('/');
    const [fLetter, lLetter] = obj.name.split(' ');
    date.setFullYear(bYear, month - 1, day);
    const dayIndex = date.getDay();
    // condition to seprate data day wise
    if (dayIndex === 0) {
      birthList[6].innerHTML += `<li>
      ${fLetter[0]}${lLetter[0]}
      </li>`
    } else {
      birthList[dayIndex - 1].innerHTML += `<li>
      ${fLetter[0]}${lLetter[0]}
      </li>`
    }
  });
};

















