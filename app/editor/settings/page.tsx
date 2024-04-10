
import { ComboboxDemo } from "@/components/ComboBoxDemo"
import Optiontitle from "@/components/Optiontitle"
import Background from "./components/Background"
import AudioMenu from "./components/Audio"
import Duration from "./components/Duration"
import FramePs from "./components/FramePs"





function Page() {
    
  return (
    <section className=" flex  flex-col gap-5">
        <Optiontitle title="Project settings"/>

        <ComboboxDemo/>
        <Background/>
        <AudioMenu/>
        <Duration/>
        <FramePs/>

    </section>
  )
}

export default Page