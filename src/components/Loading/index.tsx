import './style.scss'

export function Loading() {
  return (
    <div className="loading">
      <div className="loading-container">
        <span>loading</span>
        <div className="loading-dot" />
        <div className="loading-dot" />
        <div className="loading-dot"/>
      </div>
    </div>
  )
}