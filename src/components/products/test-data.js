// данные можем получать по сети после запроса на backend
// в нашем примере данные должны быть проинициализированы раньше, чем внедрение корневого компонента React
// для упрощения - все товары упорядочены каждый в своей категории (и категории идут последовательно)
const PRODUCTS = [
    {category: "Фрукты", price: "100", stocked: true, name: "Ананас"},
    {category: "Фрукты", price: "135", stocked: true, name: "Абрикос"},
    {category: "Фрукты", price: "200", stocked: false, name: "Яблоко"},
    {category: "Фрукты", price: "500", stocked: false, name: "Банан"},
    {category: "Овощи", price: "20", stocked: true, name: "Картофель"},
    {category: "Овощи", price: "85", stocked: false, name: "Помидор"},
    {category: "Овощи", price: "92", stocked: true, name: "Огурец"}
];

export {PRODUCTS}