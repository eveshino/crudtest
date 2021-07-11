import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export function Navigation(props) {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link to="/">Create</Link>
            </li>
            <li>
              <Link to="/get">Company List</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{props.children}</main>
    </>
  );
}
