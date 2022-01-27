import React, { Component, useState } from "react";

import classnames from "classnames";
import Loading from "./loading";
import Panel from "./Panel";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6,
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm",
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday",
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3",
  },
];

class Dashboard extends Component {
  state = {
    loading: false,
    focused: null,
  };

  Dashboard(props) {
    const [state, setState] = React.useState({ focused: null });

    function selectPanel(id) {
      setState({
        focused: id,
      });
    }
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused,
    });

    if (this.state.loading) {
      return <Loading />;
    }
    const { id, label, value, onSelect } = this.props;
    const panel = data
      .filter(
        (props) =>
          this.state.focused === null || this.state.focused === props.id
      )
      .map((props) => (
        <Panel
          key={props.id}
          id={props.id}
          label={props.label}
          value={props.value}
          onSelect={this.selectPanel}
        />
      ));
    <section
      className="dashboard__props"
      onClick={(event) => this.onSelect(id)}
    >
      {panel}
    </section>;
    return <main className={dashboardClasses}></main>;
  }
}
export default Dashboard;
