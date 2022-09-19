import dynamic from 'next/dynamic'

const RemoteLuigi = dynamic(
  () => import("app1/luigi"),
  { ssr: false }
)

const App2 = () => (<RemoteLuigi />)

export default App2
