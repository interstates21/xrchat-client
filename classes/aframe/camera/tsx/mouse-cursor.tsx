import Cursor from './cursor'

const MouseCursor = () => {
  return (
    <Cursor
      rayOrigin="mouse"
      rayCaster={{ far: 20, interval: 1000, objects: '.clickable' }}
    />
  )
}

export default MouseCursor
