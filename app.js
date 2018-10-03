
class GroceryListItem extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            done: false,
            // bold: false
        };
    }
    onListItemClick(){
        this.setState({
            done: !this.state.done
        });
    }

    // onListItemHover(){
    //     this.setState({
    //         bold: !this.state.bold
    //     })
    // }






    render(){
        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none',
        }
        // var style2 = {
        //     fontWeight: this.state.bold ? '1000' : '200'
        // }
        return (
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
        // <li style={style2} onMouseOver={this.onListItemClick.bind(this)}>{this.props.item}</li>
        )
    }
}
var GroceryList = (props) => (
         <ul>
             <h1>GroceryList</h1>
         {props.items.map( (item) =>(<GroceryListItem item={item}/>))}
        </ul>   
)
 ReactDOM.render(<GroceryList items={['milk','cheese']}/>, document.getElementById("app"))
var onListItemClick = (event) =>{
    console.log('i got clicked')
}


