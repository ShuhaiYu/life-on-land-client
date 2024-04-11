import { Link } from "react-router-dom";

const CardGrasswren = ({ wren_id, common_name, risk_category, image }) => {
    // based on the risk category, the border color will change
    const borderColor = risk_category === 'Critically Endangered' ? 'border-red' :
        risk_category === 'Endangered' ? 'border-orange' :
            risk_category === 'Vulnerable' ? 'border-yellow' : '';

    return (
        <Link to={`/grasswren/${wren_id}`} className={`flex justify-end items-center bg-dark-green h-[300px] relative border-4 transition duration-300 ease-in-out ${borderColor} hover:bg-light-green group`}>
            <img src={image} alt={common_name} className='w-[70%] h-full object-cover transition-transform duration-300 ease-in-out' />
            <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 ease-in-out">
                <h2 className="text-white text-4xl font-bold opacity-90 transition-opacity duration-300 ease-in-out group-hover:opacity-100">{common_name}</h2>
            </div>
        </Link>

    )
}

export default CardGrasswren;