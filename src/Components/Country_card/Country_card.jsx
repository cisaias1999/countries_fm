import Image from 'next/image'
import Data_country from '../Data_country/Data_country';

export default function Country_card({ bandera, nombre, poblacion ,capital, region}) {
    return (
        <div className="rounded-md w-[264px] h-[336px] flex flex-col justify-start shadow-card bg-[#FFF] mb-[48px] overflow-hidden">
            <div className="w-full h-[160px] relative">
                <img src={bandera} alt="" className='h-[160px] w-full object-cover'/>
                
            </div>
            <div className='relative h-full flex flex-col justify-center px-[30px]'>
                <h2 className='text-lg font-bold mb-[15px] text-[#111517]'>
                    {nombre}
                </h2>
                <Data_country titulo={'Poblacion'} dato={poblacion} />
                <Data_country titulo={'Region'} dato={region} />
                <Data_country titulo={'Capital'} dato={capital}/>
            </div>

        </div>
    );
}