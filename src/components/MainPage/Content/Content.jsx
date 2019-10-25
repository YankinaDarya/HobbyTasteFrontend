import React, {Component} from 'react';
import s from './Content.module.css';
import HobbySearchContainer from "./Search/SearchContainer";

class Content extends React.Component {

    render() {
        return (<div className={s.body}>
           {/* <div className={s.field}>*/}
                {/*<div className={s.search}>*/}<HobbySearchContainer />{/*</div>*/}
           {/* </div>*/}
           <button className={s.button}>Подобрать хобби</button>
        </div>);
    }
}

export default Content;