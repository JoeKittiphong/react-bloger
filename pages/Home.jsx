import { useRecoilState } from 'recoil'
import { postData } from '../store/storage'
import Card from '../components/Card'
import "../src/style/Home.css"
import Loading from '../components/Loading'

function Home({ count }) {
    //   const [count, setCount] = useState(null)
    //   const mongoDT = async()=>{
    //     const mobgoData = await axios.get("https://easy-rose-shark-gown.cyclic.Home/read")
    //     setCount({...mobgoData.data})
    //   }


    //   useEffect(()=>{
    //     mongoDT()
    //   },[!count])

    const [post, setPost] = useRecoilState(postData)
    const setPostData = (mongoData) => {
        setPost(mongoData)
    }
    return (
        <div className='home'>
            {!count ?
                <Loading/> :
                <>{
                    Object.keys(count).map(key => {
                        const items = count[key]
                        // setPost(items)
                        return <Card key={key} title={items.title} cover={items.cover} fn={() => setPostData(items)} />
                    })
                }</>}
        </div>
    )
}

export default Home
