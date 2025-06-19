const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="sword-animation">
            <div className="sword">⚔️</div>
            <div className="slash-effect"></div>
          </div>
        </div>
        <h1 className="loading-title">Vinaykumar</h1>
        <div className="loading-subtitle">AI & Full-Stack Developer | Engineering Student</div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <div className="loading-text">Booting up Tobi systems...</div>
      </div>
      <div className="loading-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`loading-particle particle-${i}`}></div>
        ))}
      </div>
    </div>
  )
}

export default LoadingScreen
