import styles from './content.module.css';

/* eslint-disable-next-line */
export interface ContentProps {
  pageTitle: string
}

export function Content(props: ContentProps) {
  return (
    <div className={styles['container']}>
      <h1>Some Content for {props.pageTitle} page!</h1>
    </div>
  );
}

export default Content;
