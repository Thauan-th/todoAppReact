import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
export default props =>{
    const keyHandler = e=>{
        if(e.key=="Enter"){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key =="Escape"){
            props.handleClear()
        }
    }
    return (
    <div role='form' className="todoForm">
        
        <Grid cols="12 9 10">
            <input id="description" onKeyUp={keyHandler} className="form-control"
            placeholder="Add uma tarefa" onChange={props.handleChange} value={props.description} />
        </Grid>
        <Grid cols="12 3 2">
            <IconButton style='primary' icon='plus' Onclick={props.handleAdd}  ></IconButton>
            <IconButton style='info' icon='search' Onclick={props.handleSearch}  ></IconButton>
            <IconButton style='default' icon='close' Onclick={props.handleClear}  ></IconButton>
        </Grid>
    </div>
        
)}