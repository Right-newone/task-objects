/*
  В функцию personUpdate() приходят
   данные в виде объекта, содержащую 
   некую информацию о человеке.
  Если этот человек является женщиной 
  (свойство gender содержит значение 'female'), 
  то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной 
  (свойство gender содержит значение 'male'), 
  следует убедиться,
  что в этом объекте есть свойство income. 
  Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть 
  в качестве результата работы функции.
*/
export function personUpdate(data) {
    let new_obj = { ...data };
    if (new_obj.gender === 'female') {
        delete new_obj.age;
    } else if (new_obj.gender === 'male') {
        if (!('income' in data)) {
            new_obj.income = 100000;
        }
    }
    return new_obj;
}

/*
  В функцию objectFieldsList приходят три объекта 
  с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей 
  в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    const new_obj = { ...obj1, ...obj2, ...obj3 };
    const result = Object.keys(new_obj).sort();
    return result;
}

/*
  Верните в результате работы функции массив 
  с клонами объекта obj.
  При этом каждый клон должен дополнительно 
  содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    return Array.from({ length: count }, (_, index) => {
        const deepClone = structuredClone(obj);
        return { ...deepClone, id: index };
    });
}
