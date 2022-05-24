import { css } from '@emotion/react'
import ClipLoader from 'react-spinners/ClipLoader'

const override = css`
  display: block;
  border-color: #ccc;
`

interface ILoading {
  loading?: boolean
}

const Loading: React.FC<ILoading> = ({ loading = false }) => {
  return <div data-testid="loading-testid"></div>
}

export default Loading
