import { ProductVideo } from "@/components/productVideo";

export default function Home() {
  return (
    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <a href="https://screen3.io" target={"_blank"}>
        <div className="relative rounded-2xl bg-[#171160]">
          <div className="flex justify-between items-center p-4">
            <h2 className="mt-3 mb-1 text-white text-xl font-gilroy font-semibold">
              Screen3
            </h2>

            <span>
              <span
                className={
                  "py-1.5 px-2 font-gilroy rounded-full bg-white text-blue-800 text-sm"
                }
              >
                ↗
              </span>
            </span>
          </div>
          <div className="relative overflow-y-hidden rounded-2xl project">
            <ProductVideo
              src={"/media/screen3.mp4"}
              poster={"/media/screen3.png"}
              color={"#171160"}
            />
            <div className="text-sm md:text-base text-white bg-gray-900 bg-opacity-50 absolute bottom-[-200] description px-3 py-2">
              <p className="mb-1">
                An all-in-one app for recording, organizing knowledge, and
                sharing video updates and meetings securely on Theta blockchain.
              </p>

              <p className="mb-3 text-xs">
                <span className="inline-block mr-2 mb-2">#Electron</span>
                <span className="inline-block mr-2 mb-2">#NextJS</span>
                <span className="inline-block mr-2 mb-2">#Node</span>
                <span className="inline-block mr-2 mb-2">#Typescript</span>
                <span className="inline-block mr-2 mb-2">#FFMPEG</span>
                <span className="inline-block mr-2 mb-2">#Theta Network</span>
                <span className="inline-block mr-2 mb-2">#WebRTC</span>
              </p>

              <span className="text-white transition spread-on-hover">
                screen3.io
                <span className={"pl-1 child"}>→</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
