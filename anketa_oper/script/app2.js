var secondName = String(prompt('Введите вашу фамилию')),
    name = String(prompt('Введите ваше имя')),
    otchestvo = String(prompt('Введите ваше отчество')),
    age = Number(prompt('Введите ваш возраст')),
    ageInDays,
    ageAfter5 = age + 5,
    gender1 = confirm('Ваш пол - мужской?'),
    gender,
    pensiya;

gender1 != '' ? gender = 'мужской' : gender = 'женский';
ageInDays = age * 365;
age < 57 ? pensiya = 'нет' : pensiya = 'да';
alert(`ваше ФИО: ${secondName} ${name} ${otchestvo} 
ваш возраст в годах: ${age}
ваш возраст в днях: ${ageInDays}
через 5 лет вам будет: ${ageAfter5}
ваш пол: ${gender}
вы на пенсии: ${pensiya}`);