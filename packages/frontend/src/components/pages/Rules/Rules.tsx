import styles from './Rules.module.scss'

const Rules: React.FC = () => {
  return (
    <section className={styles.rules}>
      <h1 className={styles.heading}>Rules or About us page</h1>
      <ul className={styles.rulesList}>
        <li className={styles.priceItem}>Rule 1</li>
        <li className={styles.priceItem}>Rule 2</li>
        <li>Rule 3</li>
      </ul>
      You agree with rules
    </section>
  )
}

export default Rules
