import { useState } from 'react'

const TestComponent = (props) => {
  const {valueProps} = props
  // const [value, setValue] = useState("bonjour")
  return (
    <div>{valueProps}</div>
  )
}

export default TestComponent