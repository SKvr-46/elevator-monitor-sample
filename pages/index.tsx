import { Container } from "@/component/container"
import { Monitor } from "@/component/monitor"
import { Content } from "@/component/content"

const Home = () => {

  return(
    <div>
      <Container>
          <Monitor>
            <Content/>
          </Monitor>
      </Container>
    </div>
  )
}
export default Home