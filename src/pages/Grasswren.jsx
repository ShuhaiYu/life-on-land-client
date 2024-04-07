import Vector from '../imgs/Vector 1.png'
import BirdIcon from '../imgs/grasswren/bird-right.png'
import GrasswrenImg1 from '../imgs/grasswren/abc3.jpg'
import SelectGrasswren from '../components/SelectGrasswren'

// Grasswren Page
const GrasswrenPage = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-28'>

                <p className="text-center text-3xl text-dark-green w-1/2 mx-auto my-10">Black summer fires took nearly 3 billions animals' lives.
                    It has never been so vital and urgent to protect our biodiversity.</p>
                <img src={Vector} alt="Vector" className='w-auto h-auto' />
                <img src={BirdIcon} alt="bird icon" className='self-center w-28 h-28 my-5 mx-1' />
                <img src={GrasswrenImg1} alt="Grasswren" className='w-[40%] my-10' />
            </div>
            <SelectGrasswren />
        </>

    )
}

export default GrasswrenPage