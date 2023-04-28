import { FrameData } from "@/types/frameData";
import React from "react";

export interface FrameSettingsProps {
  data: FrameData;
  color: string;
  onDelete: () => void;
  setState: (data: FrameData) => void;
}

export const FrameSettings: React.FC<FrameSettingsProps> = ({
  data,
  color,
  onDelete,
  setState,
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: 24,
        flexDirection: "row",
        display: "flex",
      }}
    >
      <div style={{ marginRight: 10 }}>
        <label style={{ color: "#fff" }}>Position</label>
        <div>
          <input
            type="number"
            value={data.position.left}
            onChange={(e) => {
              setState({
                ...data,
                position: {
                  ...data.position,
                  left: Number(e.target.value),
                },
              });
            }}
          />
          <input
            type="number"
            value={data.position.top}
            onChange={(e) => {
              setState({
                ...data,
                position: {
                  ...data.position,
                  top: Number(e.target.value),
                },
              });
            }}
          />
        </div>
      </div>
      <div style={{ marginRight: 10 }}>
        <label style={{ color: "#fff" }}>Size</label>
        <div>
          <input
            type="number"
            value={data.size.x}
            onChange={(e) => {
              setState({
                ...data,
                size: {
                  ...data.size,
                  x: Number(e.target.value),
                },
              });
            }}
          />
          <input
            type="number"
            value={data.size.y}
            onChange={(e) => {
              setState({
                ...data,
                size: {
                  ...data.size,
                  y: Number(e.target.value),
                },
              });
            }}
          />
        </div>
      </div>
      <div style={{ marginRight: 10 }}>
        <label style={{ color: "#fff" }}>Rotation</label>
        <div>
          <input
            type="number"
            value={data.rotation}
            onChange={(e) => {
              setState({
                ...data,
                rotation: Number(e.target.value),
              });
            }}
          />
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};
