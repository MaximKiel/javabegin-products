import {useState} from "react";
import {SearchBar} from "./product-search";
import {ProductCategoryRow, ProductRow} from "./product-row";
import "./style.css";

function FilterableProductTable({products}) {

    // spread синтаксис
    function searchValueChange(propName, value) {
        setSearchValues({
            ...searchValues,
            [propName]: value
        });
    }

    // если эти значения будут изменяться, то будет происходить авто перерисовка компонентов, которые их используют
    // поэтому нужно быть внимательным и следить за всеми местами в коде, где изменяете эти значения!
    // const [filterText, setFilterText] = React.useState(''); // filterText - введенный текст для поиска
    // const [inStockOnly, setInStockOnly] = React.useState(false); // галочка для фильтрации "только в наличии"

    const [searchValues, setSearchValues] = useState({filterText: '', inStockOnly: false});

    // при каждой отрисовке компонента - будут считывать переменные из состояния и фильтровать данные
    const filteredProducts = [];

    products.forEach((product) => {
        // будет ли добавлен товар для отображения
        var canAdd = true;
        // сначала фильтруем по тексту
        if (searchValues.filterText.length > 0 &&
            product.name.toLowerCase().indexOf(searchValues.filterText.toLowerCase()) === -1 // если товар НЕ содержит поисковый текст
        ) {
            canAdd = false;
        }
        // фильтруем по переключателю (в наличии или нет)
        if (searchValues.inStockOnly && !product.stocked) {
            canAdd = false;
        }
        if (canAdd) {
            filteredProducts.push(product);
        }
    });

    return (
        <div>
            <SearchBar
                searchValues={searchValues}
                onFilterTextChange={searchValueChange} // ссылка на метод
                onInStockOnlyChange={searchValueChange} // ссылка на метод
            />
            <ProductTable products={filteredProducts}/>
        </div>
    );
}

function ProductTable({products}) {
    // массив React компонентов ProductRow
    const rows = [];

    let lastCategory = null;

    // проходим по всем продуктам и формируем из них React компонент ProductRow
    products.forEach((product) => {
        // отображение категории
        if (product.category !== lastCategory) { // если категория товаров изменилась - тогда отображаем ее
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}/>
            );
        }
        // отображение товара в виде строки
        rows.push(
            <ProductRow
                product={product}
                key={product.name}/>
        );
        lastCategory = product.category;
    });

    return (
        <div className="container">
            <table>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Цена (руб)</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export {FilterableProductTable}