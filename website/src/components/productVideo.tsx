"use client";

export function ProductVideo(props: {
  src: string;
  poster: string;
  color?: string;
  className?: string;
}) {
  return (
    <video
      preload={"none"}
      src={props.src}
      loop
      style={{
        backgroundImage: `url(${props.poster})`,
        backgroundColor: props.color,
      }}
      className={
        "object-cover object-center rounded-t-xl bg-cover bg-center"+ props.className
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
