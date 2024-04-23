const CardOrganisation = ({ organisation }) => {
    const { name, description, image, phone } = organisation;
    return (
        <div className="flex bg-white shadow-md shadow-gray-500 rounded-xl">
            <div className="flex flex-col">
                <h2 className="text-3xl text-dark-green font-bold p-5 pl-9">{name}</h2>
                <div className="flex flex-row flex-grow">
                    <div className="flex flex-col p-5 gap-2 flex-grow">
                        <div className="flex items-center">
                            <i class="fi fi-sr-thumbtack text-left text-3xl text-gray-700 m-4"></i>
                            <p className="text-left text-gray-700 text-xl">{description}</p>
                        </div>

                        <div className="flex items-center">
                            <i className="fi fi-sr-phone-flip text-left text-3xl text-gray-700 m-4" />
                            <p className="text-left text-gray-700 text-xl">{phone}</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={image} alt={name} className="w-[20vh] h-auto object-contain mr-5 mb-5" />
        </div>

    );
}

export default CardOrganisation;