import dynamic from 'next/dynamic'

const RemoteMario = dynamic(
  () => import('app2/mario'),
  { ssr: false }
)

const App1 = () => (<RemoteMario />)

export default App1
