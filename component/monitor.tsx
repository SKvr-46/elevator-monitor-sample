import styles from "styles/monitor.module.scss"
import { ReactElement } from "react"

export const Monitor = ({ children } : { children : ReactElement}) => {

    return (
        <div className={styles.monitorwrapper}>
            {children}
        </div>
    )
}