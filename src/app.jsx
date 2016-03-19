var HighFive = React.createClass({
    getInitialState: function () {
        return {
            count: 5,
        };
    },
    render: function () {
        return (
            <div>
                <h1>High {this.state.count}!</h1>
                <button className="button-primary" onClick={this.incrementCount}>Gimme high!</button>
            </div>
        );
    },
    incrementCount: function () {
        this.setState({
            count: this.state.count+1,
        });
    },
});

ReactDOM.render(
    <HighFive/>,
    document.getElementById('high_five')
);

var List = React.createClass({
    render: function() {
        return (
            <ul>
            {
                this.props.items.map(function (item) {
                    return <li key={item}>{item}</li>
                })
            }
            </ul>
        );
    },
});

var Searchable = React.createClass({
    search: function (event) {
        var updatedList = this.state.initialItems;

        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });

        this.setState({items: updatedList});
    },
    getInitialState: function () {
        return {
            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns",
            ],
            items: [
                //
            ],
        };
    },
    componentWillMount: function () {
        this.setState({items : this.state.initialItems});
    },
    render: function () {
        return (
            <div className="searchable_list">
                <input type="text" placeholder="Search items" onChange={this.search} />

                <List items={this.state.items} />
            </div>
        );
    },
});

ReactDOM.render(<Searchable/>, document.getElementById('searcher'));
