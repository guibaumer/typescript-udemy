interface videoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}
interface videoPlayerProtocols {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements videoPlayerProtocols {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: videoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }
  iniciarEventos(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });
    this.stopButton.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playButton.innerText = 'PLAY';
    });
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'PAUSE';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'PLAY';
    }
  }
  stop(): void {
    //
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});
videoPlayer.iniciarEventos();
