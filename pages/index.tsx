import { Container } from "@/component/container"
import { Monitor } from "@/component/monitor"
import { Content } from "@/component/content"
import styles from "styles/index.module.scss"
import { useState, useEffect} from "react"

const Home = () => {
  //ボタンが押されたことを通知する
  const [floorIsSelected, setFloorIsSelected] = useState<boolean>(false)
  //AからDのどこが光るか
  const [randomNumber, setRandomNumber] = useState(0)
  //初期マウント時とそれ以降を区別するカウント
  const [count, setCount] = useState(0)


  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 4) + 1)
    setCount(count + 1)
  }, [floorIsSelected])


  return(
    <div className={styles.gridcontainer}>
      <div className={styles.griditemA}>
        <ul style={{filter: randomNumber == 1 && count >= 2 ? 'brightness(1.5) drop-shadow(0 0 10px white)' : 'none'}}>
          <li>A</li>
          <li>A</li>
        </ul>
      </div>
      <div className={styles.griditemB}>
        <ul style={{filter: randomNumber == 2 && count >= 2 ? 'brightness(1.5) drop-shadow(0 0 10px white)' : 'none'}}>
        <li>B</li>
        <li>B</li>
        </ul>
      </div>
      <div className={styles.griditemC}>
        <ul style={{filter: randomNumber == 3 && count >= 2 ? 'brightness(1.5) drop-shadow(0 0 10px white)' : 'none'}}>
        <li>C</li>
        <li>C</li>
        </ul>
      </div>
      <div className={styles.griditemD}>
        <ul style={{filter: randomNumber === 4 && count >= 2 ? 'brightness(1.5) drop-shadow(0 0 10px white)' : 'none'}}>
        <li>D</li>
        <li>D</li>
        </ul>
      </div>

      <div className={styles.maincontainer}>
        <Container>
            <Monitor>
              <Content
              floorIsSelected={floorIsSelected}
              setFloorIsSelected={setFloorIsSelected}
              />
            </Monitor>
        </Container>
      </div>
    </div>
  )
}
export default Home