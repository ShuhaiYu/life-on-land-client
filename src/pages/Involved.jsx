import React from 'react';
import CardOrganisation from '../components/CardOragnisation';
import NavCard from '../components/NavCard';
import NavCardImg1 from '../imgs/home/nsw2.jpg';
import NavCardImg2 from '../imgs/home/nsw3.jpg';
import NavCardImg3 from '../imgs/home/bushfire.jpg';

const organizations = [
    {
        id: 1,
        name: "Australian Wildlife Conservancy",
        phone: "+61 3 8660 6614",
        description: "The AWC carries out grasswren conservation work in its protected areas, particularly in the Kalamurina Wildlife Sanctuary, which provides habitat for a variety of species, including the Eyrean Grasswren.",
        image: "https://www.australianwildlife.org/wp-content/uploads/2022/09/Website-body-size-58.jpg",
        link: "https://www.australianwildlife.org/"
    },
    {
        id: 2,
        name: "BirdLife Australia",
        phone: "+61 3 9347 0757",
        description: "The organization has been monitoring Carpentarian and Kalkadoon meowwrens in northern Queensland and western Northern Territory since 2008.",
        image: "https://birdlife.org.au/wp-content/uploads/2022/08/Birdlife-logo.svg",
        link: "https://birdlife.org.au/"
    },
    {
        id: 3,
        name: "Bush Heritage Australia",
        phone: "+61 1300 628 873",
        description: "They focus on conserving various species of Grasswrens, such as the Carpentarian Grasswren, White-throated Grasswren, Short-tailed Grasswrens, Grey Grasswren, Thick-billed, and Western Grasswren, across different reserves and partnership properties.",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Bush_Heritage_Australia_logo.jpg",
        link: "https://www.bushheritage.org.au/"
    },
    {
        id: 4,
        name: "Australian Conservation Foundation",
        phone: "+61 3 9345 1111",
        description: "This is Australia's national environmental organization that has been working to protect Australia's natural environment and wildlife since 1965. Their work focuses on protecting and restoring the natural environment, climate action, and protecting Australia.",
        image: "https://cdn-static.goodcompany.org/charity/uploadnm52gtap.jpg",
        link: "https://www.acf.org.au/"
    },
    {
        id: 5,
        name: "WWF Australia",
        phone: "+61 2 8000 0303",
        description: "WWF’s global mission is to stop the degradation of the planet’s natural environment and to build a future in which humans live in harmony with nature. WWF-Australia is part of the WWF International Network, the world’s leading, independent conservation organization.",
        image: "https://linktr.ee/og/image/wwf_australia.jpg",
        link: "https://www.wwf.org.au/"
    },
    {
        id: 7,
        name: "Environs Kimberley",
        phone: "+61 8 9192 1922",
        description: "Environs Kimberley or EK is the Kimberley’s peak environmental NGO. They are dedicated to the protection and management of this special part of the world. EK scientists and other staff work at the local level with communities, landholders and land managers.",
        image: "https://assets.nationbuilder.com/environskimberley/sites/2/meta_images/original/EK_logo.svg?1485753459",
        link: "https://www.environskimberley.org.au/"
    },
    {
        id: 8,
        name: "Wilderness Society Australia",
        phone: "+61 1800 030 641",
        description: "The Wilderness Society is powered by thousands of Australians from all walks of life. They work to support the living world that makes all life possible. They have stood at the forefront of Australia’s most historic environmental victories for over 40 years.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Wilderness_Society_Logo_2018.svg",
        link: "https://www.wilderness.org.au/"
    },
    {
        id: 9,
        name: "World Animal Protection",
        phone: "+61 1300 139 772",
        description: "The vision of World Animal Protection is to build a world where animals live free from cruelty and suffering. They give animals a voice and ensure their needs are met, transforming the lives of the greatest number of animals by overhauling the global food system.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/World_Animal_Protection_logo.svg/800px-World_Animal_Protection_logo.svg.png",
        link: "https://www.worldanimalprotection.org.au/"
    },
    {
        id: 11,
        name: "WIRES",
        phone: "+61 1300 094 737",
        description: "WIRES is Australia’s largest wildlife rescue organisation. Their mission is to actively rehabilitate and preserve Australian wildlife and inspire others to do the same. WIRES provides significant national support for hundreds of projects to assist wildlife.",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8f/WIRES_logo.svg",
        link: "https://www.wires.org.au/"
    },
    {
        id: 12,
        name: "The Nature Conservancy Australia",
        phone: "+61 1300 628 686",
        description: "The Nature Conservancy is a global environmental nonprofit working to create a world where people and nature can thrive. Their mission is to conserve the land and waters on which all life depends.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4PAbpBpouOzuCjiwP0_9HeD-QSK9eFHQUT1Zzikj&s",
        link: "https://www.natureaustralia.org.au/"
    },
    {
        id: 13,
        name: "Zoos Victoria",
        phone: "+61 1300 966 784",
        description: "Zoos Victoria is a world-leading zoo-based conservation organisation, dedicated to fighting wildlife extinction. They operate Healesville Sanctuary, Kyabram Fauna Park, Melbourne Zoo, and Werribee Open Range Zoo, focusing on breeding and conservation programs.",
        image: "https://www.climateactive.org.au/sites/default/files/2019-09/zoos_victoria.png",
        link: "https://www.zoo.org.au/"
    },
    {
        id: 14,
        name: "Australia Zoo",
        phone: "+61 7 5436 2000",
        description: "Australia Zoo aims to be a global leader in conservation, relating to both wildlife and their habitats. They make a difference around the world through conservation projects, crocodile research, Wildlife Warriors, and education programs.",
        image: "https://i.ytimg.com/vi/BLuuPlb40Dk/maxresdefault.jpg",
        link: "https://www.australiazoo.com.au/"
    }
];

const InvolvedPage = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-grey py-10">
            <h1 className="text-4xl text-dark-green font-bold mt-20 mb-28">
                Get involved today and you can help <br />
                conserve Australia's unique wildlife
            </h1>
            <div className="flex flex-col gap-10 w-full max-w-6xl px-4">
                {organizations.map((organization) => (
                    <CardOrganisation key={organization.id} organisation={organization} />
                ))}
            </div>
            {/* Three nav cards */}
            <div className='flex flex-col sm:flex-col md:flex-row gap-8 justify-center m-28'>
                <NavCard title='threatened grasswren' img={NavCardImg1} link='/grasswren' />
                <NavCard title='what went wrong' img={NavCardImg3} link='/risk' />
                <NavCard title='becoming an expert' img={NavCardImg2} link='/education' />
                {/* <NavCard title='get involved' img={NavCardImg4} link='/involved' /> */}
            </div>
        </div>
    );
}

export default InvolvedPage;