import { Spin, Space } from 'antd'
import 'antd/dist/antd.min.css'

const App = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
)

export default App
