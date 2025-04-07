// строка таблицы с названием категории (занимает всю строку)
function ProductCategoryRow({category}) {
    return (
        <tr className="category">
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

// строка таблицы с информацией о товаре
function ProductRow({product}) {
    // можем вернуть зачеркнутый тег с названием товара
    const name = product.stocked ? product.name :
        <s>
            {product.name}
        </s>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>

        </tr>
    );
}

export {ProductCategoryRow, ProductRow}