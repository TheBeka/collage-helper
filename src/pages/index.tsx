import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { FrameSettings } from "@/components/frameSettings";
import { useEffect, useState } from "react";
import { FrameData } from "@/types/frameData";

const COLORS = [
  "#ff000040",
  "#00ff0040",
  "#0000ff40",
  "#ffff0040",
  "#00ffff40",
  "#ff00ff40",
  "#aaa0ff40",
  "#ffaa0040",
];

export default function Home() {
  const [framesData, setFramesData] = useState<FrameData[]>([]);
  const [presets, setPresets] = useState<FrameData[][]>([]);
  const [file, setFile] = useState<File>();

  useEffect(() => {
    const storedPresets = localStorage.getItem("presets");
    if (storedPresets) {
      setPresets(() => JSON.parse(storedPresets));
    }
  }, []);

  const savePreset = () => {
    const newPreset = [...framesData];
    setPresets(([prev]) => [...presets, newPreset]);
    localStorage.setItem("presets", JSON.stringify([...presets, newPreset]));
  };

  const deletePreset = (index: number) => {
    const newPresets = [...presets];
    newPresets.splice(index, 1);
    setPresets(newPresets);
    localStorage.setItem("presets", JSON.stringify(newPresets));
  };

  const createFrame = () => {
    const newFrameData: FrameData = {
      rotation: 0,
      position: {
        left: 10,
        top: 10,
      },
      size: {
        x: 20,
        y: 20,
      },
    };
    setFramesData([...framesData, newFrameData]);
  };

  return (
    <>
      <Head>
        <title>Collage Helper</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.leftContainer}>
          <div className={styles.image}>
            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt="Selected File"
                style={{
                  position: "absolute",
                  width: 400,
                  height: 400,
                  background: "#ffffff20",
                }}
              />
            )}
            <div
              style={{
                position: "absolute",
                width: 400,
                height: 400,
              }}
            >
              {framesData.map((frameData, index) => (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    left: `${frameData.position.left}%`,
                    top: `${frameData.position.top}%`,
                    width: `${frameData.size.x}%`,
                    height: `${frameData.size.y}%`,
                    transform: `rotate(${frameData.rotation}deg)`,
                    background: COLORS[index],
                  }}
                />
              ))}
            </div>
          </div>
          <div style={{ background: "#ffffff20" }}>
            <p style={{ color: "#fff" }}>
              {JSON.stringify(
                framesData.map((d) => {
                  return {
                    position: {
                      left: `${d.position.left}%`,
                      top: `${d.position.top}%`,
                    },
                    size: {
                      x: `${d.size.x}%`,
                      y: `${d.size.y}%`,
                    },
                    rotation: d.rotation,
                  };
                })
              )}
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div>
            <button onClick={createFrame}>Create Frame</button>
            <button onClick={savePreset}>Save Preset</button>
          </div>
          <div>
            <input
              type="file"
              style={{ color: "#fff" }}
              onChange={(e) => {
                if (e.target.files) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </div>
          <h4>Presets</h4>
          <div style={{ maxHeight: 400, overflow: "scroll", backgroundColor: '#ffffff10' }}>
            {presets.map((preset, index) => (
              <div
                style={{
                  backgroundColor: index % 2 == 0 ? "#ffffff20" : "transparent",
                }}
                key={index}
              >
                <button onClick={() => setFramesData(preset)}>
                  Load {preset.length}
                </button>
                <button onClick={() => deletePreset(index)}>Delete</button>
              </div>
            ))}
          </div>
          <h4>Frame Settings</h4>
          <div>
            {framesData.map((frameData, index) => (
              <FrameSettings
                key={index}
                data={frameData}
                color={COLORS[index]}
                setState={(newData) => {
                  const newFramesData = [...framesData];
                  newFramesData[index] = newData;
                  setFramesData([...newFramesData]);
                }}
                onDelete={() => {
                  const newFramesData = [...framesData];
                  newFramesData.splice(index, 1);
                  setFramesData([...newFramesData]);
                }}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
