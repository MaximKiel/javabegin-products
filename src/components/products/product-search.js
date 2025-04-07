// область поиска (влияет на данные таблицы).
// важно! компонент не должен изменять входящие свойства, а только вызывать callback методы,
// чтобы родительский компонент смог использовать измененные значения
function SearchBar({
                       searchValues,
                       onFilterTextChange, // callback метод для обработки в родительском компоненте
                       onInStockOnlyChange // callback метод для обработки в родительском компоненте (при нажатии на галочку)
                   }) {
    return (
        <>
            <div className="container">
                <form role="search" id="form">
                    <input
                        type="search"
                        value={searchValues.filterText}
                        placeholder="Поиск..."
                        onChange={(e) => onFilterTextChange('filterText', e.target.value)}
                    />
                    <button onClick={(event) => {
                        onFilterTextChange('filterText', '');
                        event.preventDefault(); // остановить дальнейшее действие нажатия (которое проведет в перезагрузке страницы, т.к. мы находимся внутри form
                    }}>
                        <svg viewBox="0 0 24 24" id="cancel">
                            <path
                                d="M13.41,12l4.3-4.29a1, 1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/>
                        </svg>
                    </button>
                </form>
            </div>

            <div className="container">
                Показать только в наличии
                <input type="checkbox"
                       className="checkbox"
                       id="box"
                       checked={searchValues.inStockOnly}
                       onChange={(e) => onInStockOnlyChange('inStockOnly', e.target.checked)}
                />

                <label htmlFor="box"></label>
            </div>
        </>
    );
}

export {SearchBar}