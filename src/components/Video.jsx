import "../styles/projetos.css";

export function Video() {
  return (
    <video className="video-background" autoPlay loop muted>
      <source src={video} type="video/mp4" />
      {/* Caso queira suporte a outros formatos de vídeo, adicione outras tags source aqui */}
    </video>
  );
}
