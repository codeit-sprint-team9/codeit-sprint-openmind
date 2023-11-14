import FadeLoader from 'react-spinners/FadeLoader'

function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FadeLoader color="#818181" height={15} width={5} radius={2} margin={2} />
    </div>
  )
}

export default Loading
