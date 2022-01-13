import React,{Component} from "react";
import Grid from "../template/grid";
import { add,changeDescription , search,clear} from "./todoActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import IconButton from "../template/iconButton";

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.keyHandler = this.keyHandler.bind(this)
    }
    keyHandler(e){
        const {add,clear,search,description} = this.props
        if(e.key=="Enter"){
            e.shiftKey ? search() : add(des)
        }else if(e.key =="Escape"){
            clear()
        }
    }
    componentWillMount(){
        this.props.search()
    }
    render(){
        const {add,search,description} = this.props
        return(
        <div role='form' className="todoForm">
                <Grid cols="12 9 10">                
                    <input id="description" onKeyUp={this.keyHandler} className="form-control"
                    placeholder="Add uma tarefa" onChange={this.props.changeDescription} value={this.props.description} />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style='primary' icon='plus' Onclick={()=>add(description)}  ></IconButton>
                    <IconButton style='info' icon='search' Onclick={()=>search()}  ></IconButton>
                    <IconButton style='default' icon='close' Onclick={this.props.clear}  ></IconButton>
                </Grid>
            </div>
                
        )
    }
    
}
function mapStateToProps(state){
    return ({
        description : state.todo.description
    })
}
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription ,search,add,clear},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)