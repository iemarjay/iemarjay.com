"use client";

export function ProductVideo(props: { src: string; poster: string }) {
  return (
    <video
      preload={"none"}
      src={props.src}
      loop
      style={{ backgroundImage: `url(${props.poster})` }}
      className={
        "object-cover object-center rounded-t-xl w-full h-60 bg-cover bg-center"
      }
      controls={false}
      muted={true}
      onMouseEnter={(e) => {
        // @ts-ignore
        e.target.play();
      }}
      onMouseLeave={(e) => {
        // @ts-ignore
        e.target.pause();
      }}
    ></video>
  );
}
