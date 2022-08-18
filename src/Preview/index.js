import { Loading, KeyboardNav, KeyboardNavItem, Preload } from "@cerebroapp/cerebro-ui";
import getSuggestions from "../getSuggestions";
import styles from "./styles.module.css";

const Preview = ({ query, search }) => {
  return (
    <Preload promise={getSuggestions(query)} loader={<Loading />}>
      {(suggestions) => (
        <Sugestions suggestions={suggestions} searchFn={search} />
      )}
    </Preload>
  );
};

const Sugestions = ({ suggestions, searchFn }) => {
  return (
    <div className={styles.wrapper}>
      <KeyboardNav>
        <ul className={styles.list}>
          {suggestions.map((s) => (
            <KeyboardNavItem
              key={s}
              tagName={"li"}
              onSelect={() => searchFn(s)}
            >
              {s}
            </KeyboardNavItem>
          ))}
        </ul>
      </KeyboardNav>
    </div>
  );
};

export default Preview;
