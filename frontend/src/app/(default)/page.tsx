import { ProductVideo } from "@/components/productVideo";

export default function Home() {
  return (
    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="">
        <a href="" className="relative w-full">
          <ProductVideo
            src={"/media/screen3.mp4"}
            poster={"/media/screen3.png"}
          />
        </a>
        <div className="relative">
          <h2 className="mt-3 mb-1 text-white text-xl font-gilroy font-semibold">
            Screen3
          </h2>
          <div className="text-base md:text-lg">
            <p className="mb-1">
              An all-in-one app for recording, organizing knowledge, and sharing
              video updates and meetings securely on Theta blockchain.
            </p>

            <p className="mb-3">
              <span className="inline-block p-1 px-2 mr-2 mb-2 text-sm bg-blue-600 bg-opacity-20 rounded-lg">
                Electron
              </span>
              <span className="inline-block p-1 px-2 mr-2 mb-2 text-sm bg-blue-600 bg-opacity-20 rounded-lg">
                NextJS
              </span>
              <span className="inline-block p-1 px-2 mr-2 mb-2 text-sm bg-blue-600 bg-opacity-20 rounded-lg">
                Node
              </span>
              <span className="inline-block p-1 px-2 mr-2 mb-2 text-sm bg-blue-600 bg-opacity-20 rounded-lg">
                Typescript
              </span>
              <span className="inline-block p-1 px-2 mr-2 mb-2 text-sm bg-blue-600 bg-opacity-20 rounded-lg">
                FFMPEG
              </span>
              <span className="inline-block p-1 px-2 mr-2 mb-2 text-sm bg-blue-600 bg-opacity-20 rounded-lg">
                Theta Network
              </span>
              <span className="inline-block p-1 px-2 mr-2 mb-2 text-sm bg-blue-600 bg-opacity-20 rounded-lg">
                WebRTC
              </span>
            </p>

            <a
              href="https://screen3.io"
              target="_blank"
              className="text-white opacity-70 hover:opacity-100 transition spread-on-hover"
            >
              screen3.io
              <span className={"pl-1 child"}>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
