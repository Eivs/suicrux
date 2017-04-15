import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {Menu, Icon} from 'semantic-ui-react'
import Logo from './Logo'
import _ from 'lodash'
import './Sidebar.scss'

export default class SidebarInnerComponent extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        logout: PropTypes.func,
        routing: PropTypes.array
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps.routing, this.props.routing)
    //     return !_.isEqual(nextProps.routing, this.props.routing)
    // }

    render() {
        const {logout, routing} = this.props

        let routes = routing.map((route, i) => {
            let {external, path, icon, name} = route
            let propsMenuItem = {
                as: external ? 'a' : NavLink,
                link: true,
                key: i,
                [external ? 'href' : 'to']: path
            }

            if (!external) {
                propsMenuItem.activeClassName = 'active'
            }

            return (
                <Menu.Item {...propsMenuItem} icon>
                    <Icon name={icon}/> {name}
                </Menu.Item>
            )
        })

        return (
            <div>
                <Logo centered/>
                {routes}
                <Menu.Item className="logout" onClick={logout}>
                    <Icon name='sign out'/>
                    Logout
                </Menu.Item>
            </div>
        )
    }
}