import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {YearNavigatorProps} from "../../types/propsTypes";
import {Exercise} from "../../types/exercisesProps";

class YearNavigator extends React.Component<YearNavigatorProps, any> {
    state: {
        year: number,
        exs: Exercise[],
    }

    constructor(props: YearNavigatorProps) {
        super(props);

        this.state = {
            year: props.year,
            exs: props.exs
        }
    }

    render() {
        const routes = this.state.exs.map(item => {
            const ComponentItem = item.component;
            return (
                <Route key={"route_"+item.key} path={item.link} element={<ComponentItem key={item.key}/>}/>
            )
        });

        const links = this.state.exs.map(item => {
            let link = `/${this.state.year}/${item.link}`;
            return (
                <li key={"li"+item.key}>
                    <Link key={"link_"+item.key} to={link}>Day {item.day} Part {item.part}</Link>
                </li>
            )
        });

        return (
            <div>
                <ul>
                    {links}
                </ul>
                <hr />
                <Routes>
                    {routes}
                </Routes>
            </div>
        );
    }
}

export default YearNavigator;
