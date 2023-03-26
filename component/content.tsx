import styles from "styles/content.module.scss"

export const Content = () => {

    const floorArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "L", "0", "LL"]

    return(
        <div className={styles.content}>
            <div className={styles.charcontent} >
                <p>Enter destination</p>
                <p> ご希望の階数を押してください。</p>
            </div>
            <div className={styles.gridcontent}>
            {
                floorArr.map((floor, index) => {
                    const row = Math.floor(index / 3) + 1
                    const col = index % 3 + 1
                    return(
                        <div 
                        key={index}
                        className={styles.flooritem}
                        style={{gridRow: row, gridColumn: col}}
                        >
                            {floor}
                        </div>
                    )
                })
            }
            <div className={styles.hotellogo}>

            </div>
            </div>
        </div>
    )
}
