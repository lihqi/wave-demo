import { useRef, useEffect } from "react";

import WaveSurfer from "wavesurfer.js";
import Curosr from "wavesurfer.js/dist/plugin/wavesurfer.cursor.js";
import Region from "wavesurfer.js/dist/plugin/wavesurfer.regions.js";
import mpurl from "./stereo.mp3";

const Palyer = (props) => {
  const waveRef = useRef(null);
  const { url } = props;
  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "#00AFCC",
      barGap: 2,
      barWidth: 4,
      barRadius: 3,
      cursorWidth: 2,
      cursorColor: "#567FFF",
      scrollParent: true,

      plugins: [
        Region.create({
          regionsMinLength: 2,

          dragSelection: {
            slop: 5
          }
        })
      ]
    });

    wavesurfer.on("ready", () => {
      wavesurfer.load(mpurl);
    });
    waveRef.current = wavesurfer;

    return () => {
      waveRef.current?.destroy();
    };
  }, []);
  return <div id="waveform"></div>;
};
export default Palyer;
