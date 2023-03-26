import styles from "styles/content.module.scss"

type ContentPropsType = {
    floorIsSelected: boolean
    setFloorIsSelected: React.Dispatch<React.SetStateAction<boolean>>
}

export const Content = (props: ContentPropsType) => {

    const { floorIsSelected, setFloorIsSelected } = props

    const floorArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "L", "0", "LL"]

    const toggleFloorIsSelected = () => {
        setFloorIsSelected(!floorIsSelected)
        console.log(floorIsSelected)
    }

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
                        <button 
                        key={index}
                        className={styles.flooritem}
                        style={{gridRow: row, gridColumn: col}}
                        onClick={() => toggleFloorIsSelected()}
                        >
                            {floor}
                        </button>
                    )
                })
            }
            <div className={styles.hotellogo}>

            </div>
            </div>
        </div>
    )
}
