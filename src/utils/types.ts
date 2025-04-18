// тэг для сниппета
export interface IData_TagItem {
    /** Название тега */
    value: string;
    /** Количество тегов с указанным названием */
    count: number;
}

// трафик для сниппета
export interface IData_TrafficItem {
    /** Название страны-источника трафика */
    value: string;
    /** Объём трафика для указанной страны */
    count: number;
}

// интерфейс для данных о новостях
export interface IData_SnippetNews {
    /** Идентификатор новости */
    ID: number;

    /** Заголовок новости */
    TI: string;

    /** Содержимое новости */
    AB: string;

    /** Ссылка на новость */
    URL: string;

    /** Домен */
    DOM: string;

    /** Дата и время публикации в формате "%Y-%m-%dT%H:%M:%S" */
    DP: string;

    /** Язык новости */
    LANG: string;

    /** Охват новости */
    REACH: number;

    /** Ключевые слова */
    KW: IData_TagItem[];

    /** Авторы новости */
    AU: string[];

    /** Страна */
    CNTR: string;

    /** Код страны */
    CNTR_CODE: string;

    /** Сентимент новости */
    SENT: string;

    /** Трафик из стран */
    TRAFFIC: IData_TrafficItem[];

    /** Ссылка на иконку */
    FAV: string;

    /** Блоки содержимого с ключевыми словами */
    HIGHLIGHTS: string[];
}
