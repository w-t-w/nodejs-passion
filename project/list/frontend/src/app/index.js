const {useState} = require('react');

const {List} = require('../../../components/build/components_index');

const App = () => {
    const [columns, setColumns] = useState(window.react_list_columns.columns);
    const [sort, setSort] = useState(window.react_list_sort);
    const [filter, setFilter] = useState(window.react_list_filter);

    return <List
        columns={columns}
        sort={sort_result => {
            fetch(`/api?sort=${sort_result}&filter=${filter}`)
                .then(response => response.json())
                .then(({columns}) => {
                    setColumns(columns);
                    setSort(sort_result);
                })
                .catch(err => console.error(err));
        }}
        filter={filter_result => {
            fetch(`/api?sort=${sort}&filter=${filter_result}`)
                .then(response => response.json())
                .then(({columns}) => {
                    setColumns(columns);
                    setFilter(filter_result);
                })
                .catch(err => console.error(err));
        }}
    />
};

module.exports = App;
