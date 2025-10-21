import { ThreeDots } from 'react-loader-spinner'

export default function DotsLoader() {
  return (
    <ThreeDots
      visible={true}
      height="24"
      width="50"
      color="#000"
      radius="9"
      ariaLabel="three-dots-loading"
    />
  )
}
