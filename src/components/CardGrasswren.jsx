import { Link } from "react-router-dom";

const CardGrasswren = ({ wren_id, common_name, risk_category, image }) => {
    const borderColor = risk_category === 'Critically Endangered' ? 'border-red' :
        risk_category === 'Endangered' ? 'border-orange' :
            risk_category === 'Vulnerable' ? 'border-yellow' : '';
    return (
        <div className={`flex justify-end items-center bg-dark-green h-[300px] relative border-4 ${borderColor}`}>
            <img src={image} alt={common_name} className=' w-[70%] h-full object-cover' />
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold opacity-90">{common_name}</h2>
            </div>
            {/* <h1 className='text-4xl text-white opacity-70 font-bold pl-5'>{common_name}</h1> */}
            <Link to={`/grasswren/${wren_id}`} className='text-lg font-semibold text-white underline absolute bottom-0 left-0 pl-5 pb-5'>What are they?</Link>
        </div>
    )
}

export default CardGrasswren;