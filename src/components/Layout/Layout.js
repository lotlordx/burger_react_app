import React from "react";
import Aux from "../../hoc/Aux/Aux";
import styles from "./Layout.module.css";

const layout = props => {

  return (
    <Aux>
      <div>ToolBar SideDrawer and BackDrop</div>
      <main className={styles.container}>
          {props.children}
      </main>
    </Aux>
  );
};

export default layout;
