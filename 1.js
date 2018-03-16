
		//1.Создать три const - строки,
		 //содержащие символы клавиатуры верхнего,
		 //среднего и нижнего ряда английского языка.
		 //Например для верхнего ряда русской раскладки
		 //строка будет выглядеть 'йцукенгшщзхъ'.
	const top_button = 'qwertyuiop[]';
	const mid_button = 'asdfghjkl;\'';
	const bot_button = 'zxcvbnm,./';

		// 2.Создать три const переменные с числом,
		// содержащим длинну строк, полученных ранее.


	console.log(top_button.length);
	console.log(mid_button.length);
	console.log(bot_button.length);

		// 3.Используя charAt, для каждой строки получить
		// первый и последний символ
		// для каждой из трех строк,
		// используйте имеющиеся константы.

	console.log(top_button.charAt(0));
	console.log(mid_button.charAt(0));
	console.log(bot_button.charAt(0));

	console.log(top_button.charAt(11));
	console.log(mid_button.charAt(10));
	console.log(bot_button.charAt(9));


		// 4.Сделайте поиск позиции для символов [ и ]
		//  с помощью indexOf и сохраните результат в переменных.

	console.log(top_button.indexOf('['));
	console.log(mid_button.indexOf('['));
	console.log(bot_button.indexOf('['));

	console.log(top_button.indexOf(']'));
	console.log(mid_button.indexOf(']'));
	console.log(bot_button.indexOf(']'));

		//5.Используя многострочную шаблонную строку,
		//вывести названия всех переменных
		//и полученные значения за один console.log.

	// console.log(top_button, mid_button, bot_button,
	//  top_button.length, mid_button.length, bot_button.length,
	//  top_button.charAt(0), mid_button.charAt(0), bot_button.charAt(0),
	//  top_button.charAt(11), mid_button.charAt(10), bot_button.charAt(9),
	//  top_button.indexOf('['), mid_button.indexOf('['), bot_button.indexOf('['),
	//  top_button.indexOf(']'), mid_button.indexOf(']'), bot_button.indexOf(']'));

	const button = ` ${top_button}, ${mid_button}, ${mid_button}, ${top_button.length}, ${mid_button.length}, ${mid_button.length}, ${top_button.charAt(0)}, ${mid_button.charAt(0)} ${bot_button.charAt(0)}, ${top_button.charAt(11)}, ${mid_button.charAt(10)}, ${bot_button.charAt(9)}, ${top_button.indexOf('[')}, ${mid_button.indexOf('[')}, ${bot_button.indexOf('[')}, ${top_button.indexOf(']')}, ${mid_button.indexOf(']')}, ${bot_button.indexOf(']')}.`;
	
	console.log(button);