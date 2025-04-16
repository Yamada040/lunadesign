import Link from "next/link";
import styles from "./Header.module.css"

export function Header() {
    return(
     <div className={styles.container}>
        <h1 className={`${styles.menu} ${styles.title}`}><Link href="/">luna design</Link></h1>
        
        <ul className={styles.menu}>
            <li><Link href="/">top</Link></li>
            <li><Link href="/">gallery</Link></li>
            <li><Link href="/">intro</Link></li>
            <li><Link href="/">contact</Link></li>
            <li><Link href="/">SNS</Link></li>
        </ul>
    </div>
    );
};