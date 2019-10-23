import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import PropTypes from 'prop-types';

export class AppTopbar extends Component {

    static defaultProps = {
        onToggleMenu: null
    }

    static propTypes = {
        onToggleMenu: PropTypes.func.isRequired
    }
    signout(){
        // LoginService.signout();
        localStorage.removeItem("menus");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
         window.location.href='.#/';
       }
    render() {
        return (
            <div className="layout-topbar clearfix">
                <button className="p-link layout-menu-button" onClick={this.props.onToggleMenu}>
                    <span className="pi pi-bars"/>
                </button>
                <div className="layout-topbar-icons">
                    <span className="layout-topbar-search">
                        
                    <h2>Welcome:<span style={{color:'black'}}>{localStorage.getItem("username")}</span></h2>
                    </span>
                     
                    <button className="p-link" onClick={()=>this.signout()}>
                        <span className="layout-topbar-item-text">User</span>
                        <span className="layout-topbar-icon pi pi-power-off"/>
                    </button>
                </div>
            </div>
        );
    }
}