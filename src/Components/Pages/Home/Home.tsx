import { ImagePartHome } from '../../ImagePartHome/ImagePartHome';
import { TextPartHome } from '../../TextPartHome/TextPartHome';
import MinePic from "../../../../public/Images/MinePic.svg"


export const Home = () => {
  return (
    <main className='flex justify-between px-20 flex-1'>
        <TextPartHome name='Sebastian Gallego' className="flex flex-col justify-around w-6/12"/>
        <ImagePartHome url={MinePic} className='h-96 object-cover rounded-card w-96 -scale-x-100 
        animate-scale-slow
        shadow-xl  shadow-slate-700 
        border-solid border-white border-x-8 border-y-8'/>
    </main>
  )
}   
