import parse from 'html-react-parser';

const VideoSection = ({ linkVideo, transcripcion }) => {
  return (
    <section id='video-transcripcion'>
      <div className="ratio ratio-16x9">
        <iframe className="embed-responsive-item bg-dark w-100" allowFullScreen src={linkVideo}></iframe>
      </div>
      <div className="card text-dark mt-2" style={{ 'overflowY': 'scroll', 'height': 300 }} >
        <div className="card-header sticky-top bg-light">
          <h5 className="card-title"> Transcripción</h5>
        </div>
        <div className="card-body">
          <p className="card-text h6"> {parse(transcripcion)}</p>
        </div>
      </div>
    </section>
  )
}

export default VideoSection