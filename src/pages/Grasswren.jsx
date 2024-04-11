import Vector from '../imgs/Vector 1.png'
import BirdIcon from '../imgs/grasswren/bird-right.png'
import GrasswrenImg1 from '../imgs/grasswren/abc3.jpg'
import SelectGrasswren from '../components/SelectGrasswren'
import NavCard from '../components/NavCard'
import NavCardImg1 from '../imgs/home/getinvolved.jpeg'
import NavCardImg2 from '../imgs/home/nsw3.jpg'
import NavCardImg3 from '../imgs/home/bushfire.jpg'

// Grasswren Page
const GrasswrenPage = () => {
    return (
        <>
            
            <SelectGrasswren />
            <div className='flex flex-col justify-center items-center my-16'>
                <img src={GrasswrenImg1} alt="Grasswren" className='w-[40%] my-10' />
                <p className="text-center text-3xl text-dark-green w-1/2 mx-auto my-10">Black summer fires took nearly 3 billions animals' lives.
                    It has never been so vital and urgent to protect our biodiversity.</p>
                <img src={Vector} alt="Vector" className='w-auto h-auto' />
                <img src={BirdIcon} alt="bird icon" className='self-center w-20 h-20 my-5 mx-1' />
                
            </div>
            {/* links to other pages */}
            {/* Three nav cards */}
            <div className='flex flex-col sm:flex-col md:flex-row gap-8 justify-center my-16'>
                <NavCard title='get involved' img={NavCardImg1} link='/involved' />
                <NavCard title='what went wrong' img={NavCardImg3} link='/risk' />
                <NavCard title='becoming an expert' img={NavCardImg2} link='/education' />
            </div>

        </>

    )
}

export default GrasswrenPage