import React, {Component} from 'react';
import classNames from 'classnames';
import {AppTopbar} from './AppTopbar';
import {AppFooter} from './AppFooter';
import {AppMenu} from './AppMenu';
import {AppProfile} from './AppProfile';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import {Dashboard} from './components/Dashboard';
import {FormsDemo} from './components/FormsDemo';
import {SampleDemo} from './components/SampleDemo';
import {DataDemo} from './components/DataDemo';
import {PanelsDemo} from './components/PanelsDemo';
import {OverlaysDemo} from './components/OverlaysDemo';
import {MenusDemo} from './components/MenusDemo';
import {MessagesDemo} from './components/MessagesDemo';
import {ChartsDemo} from './components/ChartsDemo';
import {MiscDemo} from './components/MiscDemo';
import {EmptyPage} from './components/EmptyPage';
import {Documentation} from "./components/Documentation";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import './layout/layout.scss';
import './App.scss';
import Login from './Login';
import EmployeeList from './components/Employee/EmployeeList';
import Employee from './components/Employee/Employee';
import Department from './components/Employee/Department';
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false,
            menus:[]
        };

        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.onToggleMenu = this.onToggleMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
      //  this.createMenu();
     //alert("menus>>"+localStorage.getItem("menus"));
      //if(localStorage.getItem("menus")!=undefined)
      
    }
    componentDidMount(){
        this.setState({menus:JSON.parse(localStorage.getItem("menus"))});
       //alert("did>>"+this.state.menus);
    }
     componentDidUpdate() {
         
        if (this.state.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
           
          
    }
    onWrapperClick(event) {
        if (!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            });
        }

        this.menuClick = false;
    }

    onToggleMenu(event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            if (this.state.layoutMode === 'overlay') {
                this.setState({
                    overlayMenuActive: !this.state.overlayMenuActive
                });
            }
            else if (this.state.layoutMode === 'static') {
                this.setState({
                    staticMenuInactive: !this.state.staticMenuInactive
                });
            }
        }
        else {
            const mobileMenuActive = this.state.mobileMenuActive;
            this.setState({
                mobileMenuActive: !mobileMenuActive
            });
        }
       
        event.preventDefault();
    }

    onSidebarClick(event) {
        this.menuClick = true;
    }

    onMenuItemClick(event) {
        if(!event.item.items) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            })
        }
    }

    createMenu() {
        this.menu = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', command: () => {window.location = '#/'}},
            {
                label: 'Menu Modes', icon: 'pi pi-fw pi-cog',
                items: [
                    {label: 'Static Menu', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutMode: 'static'}) },
                    {label: 'Overlay Menu', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutMode: 'overlay'}) }
                ]
            },
            {
                label: 'Menu Colors', icon: 'pi pi-fw pi-align-left',
                items: [
                    {label: 'Dark', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutColorMode: 'dark'}) },
                    {label: 'Light', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutColorMode: 'light'}) }
                ]
            },
            {
                label: 'Components', icon: 'pi pi-fw pi-globe', badge: '9',
                items: [
					{label: 'Sample Page', icon: 'pi pi-fw pi-th-large', to: '/sample'},
					{label: 'Forms', icon: 'pi pi-fw pi-file', to: '/forms'},
					{label: 'Data', icon: 'pi pi-fw pi-table', to: '/app/data'},
					{label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels'},
					{label: 'Overlays', icon: 'pi pi-fw pi-clone', to: '/overlays'},
					{label: 'Menus', icon: 'pi pi-fw pi-plus', to: '/menus'},
					{label: 'Messages', icon: 'pi pi-fw pi-spinner',to: '/messages'},
					{label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts'},
					{label: 'Misc', icon: 'pi pi-fw pi-upload', to: '/misc'}
                ]
            },
            {
                label: 'Template Pages', icon: 'pi pi-fw pi-file',
                items: [
                    {label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
                                    {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
                                    {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},
                                    {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
                                    {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
                                    {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
                                    {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark'}
                                ]
                            }
                        ]
                    }
                ]
            },
            {label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => {window.location = "#/documentation"}},
            {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location = "https://github.com/primefaces/sigma"}}
        ];
    }

    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    
   
    render() {
        const logo = this.state.layoutColorMode === 'dark' ? 'assets/layout/images/logo-white.svg': 'assets/layout/images/logo.svg';

        const wrapperClass = classNames('layout-wrapper', {
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-static-sidebar-inactive': this.state.staticMenuInactive && this.state.layoutMode === 'static',
            'layout-overlay-sidebar-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
            'layout-mobile-sidebar-active': this.state.mobileMenuActive
        });

        const sidebarClassName = classNames("layout-sidebar", {
            'layout-sidebar-dark': this.state.layoutColorMode === 'dark',
            'layout-sidebar-light': this.state.layoutColorMode === 'light'
        });

        return (
            <div className={wrapperClass} onClick={this.onWrapperClick}>
                <AppTopbar onToggleMenu={this.onToggleMenu}/>

                <div ref={(el) => this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}>
                    <div className="layout-logo">
                       <h1 style={{color:'white'}}>CMS App</h1>
                       
                    </div>
                    <AppProfile />
                  
                    <AppMenu model={this.state.menus} onMenuItemClick={this.onMenuItemClick} />
                </div>

                <div className="layout-main">
               
                   <Switch>
                   
                   <Route path={`${this.props.match.path}/employee-list`} exact component={EmployeeList} />
                   <Route path={`${this.props.match.path}/add-employee`} exact component={Employee} />
                   <Route path={`${this.props.match.path}/department`} exact component={Department} />
                    <Route path={`${this.props.match.path}/dashboard`} exact component={Dashboard} />
                    <Route  path={`${this.props.match.path}/forms`} component={FormsDemo} />
                    <Route path={`${this.props.match.path}/sample`} component={SampleDemo} />
                    <Route path={`${this.props.match.path}/data`}   component={DataDemo} />
                    <Route path={`${this.props.match.path}/panels`}  component={PanelsDemo} />
                    <Route path={`${this.props.match.path}/overlays`} component={OverlaysDemo} />
                    <Route path={`${this.props.match.path}/menus`}   component={MenusDemo} />
                    <Route path={`${this.props.match.path}/messages`} component={MessagesDemo} />
                    <Route path={`${this.props.match.path}/charts`}   component={ChartsDemo} />
                    <Route path={`${this.props.match.path}/misc`}     component={MiscDemo} />
                    <Route path={`${this.props.match.path}/empty`}    component={EmptyPage} />
                    <Route path={`${this.props.match.path}/documentation`}   component={Documentation} />
                    </Switch>
                   
                </div>

                <AppFooter />

                <div className="layout-mask"></div>
            </div>
        );
    }
}

export default App;
