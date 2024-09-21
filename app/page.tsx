import FourBandResistor from "../components/resistors/FourBandResistor";
import FiveBandResistor from "@/components/resistors/FiveBandResistor";
import SixBandResistor from "@/components/resistors/SixBandResistor";

export default function Home() {
  return (
    <div className={'flex flex-col gap-10'} >
        <FourBandResistor />
        <FiveBandResistor />
        <SixBandResistor />
    </div>
  );
}
