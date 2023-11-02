import Image from "next/image";
import Weather from "@/components/weather/Weather";
export default function Home() {
  return (
    <div
      className="h-screen w-screen 
                  bg-slate-300"
    >
      <Weather />
    </div>
  );
}
