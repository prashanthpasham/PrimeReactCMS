import React, { Component } from 'react';
import classNames from 'classnames';

export class AppProfile extends Component {

    constructor() {
        super();
        this.state = {
            expanded: false
        };
        this.onClick = this.onClick.bind(this);
        
    }
     componentDidMount(){
        //alert(localStorage.getItem("username"));
        if(localStorage.getItem("username")!=undefined)
        this.setState({username:localStorage.getItem("username")});
     }
    onClick(event) {
        this.setState({expanded: !this.state.expanded});
        event.preventDefault();
    }
    signout(){
        // LoginService.signout();
        localStorage.removeItem("menus");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
         window.location.href='.#/';
       }
    render() {
        return  (
            <div className="layout-profile">
                <div>
                    <img src="assets/layout/images/profile.png" alt="" />
                </div>
                <button className="p-link layout-profile-link" onClick={this.onClick}>
                    <span className="username">{this.state.username}</span>
                    <i className="pi pi-fw pi-cog"/>
                </button>
                <ul className={classNames({'layout-profile-expanded': this.state.expanded})}>
                    <li><button className="p-link"><i className="pi pi-fw pi-user"/><span>Account</span></button></li>
                    <li><button className="p-link"><i className="pi pi-fw pi-inbox"/><span>Notifications</span><span className="menuitem-badge">2</span></button></li>
                    <li><button className="p-link" onClick={()=>this.signout()}><i className="pi pi-fw pi-power-off"/><span>Logout</span></button></li>
                </ul>
            </div>
        );
    }
}