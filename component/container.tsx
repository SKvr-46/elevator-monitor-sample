import { ReactElement } from "react"
import styles from "styles/container.module.scss"

export const Container = ({ children } : { children : ReactElement}) => {

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}