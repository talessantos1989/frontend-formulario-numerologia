import './step.css'
import {AiOutlineUser, AiOutlineCheckCircle} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

//preciso saber qual o step
export default function Steps({currentStep}){
    return(
        <div className='steps'>
            <div className='step active'>
                <AiOutlineUser />
                <p>Idenfificação</p>
            </div>
            <div className={`step ${currentStep >= 1 ? "active": ""}`}>
                <AiOutlineCheckCircle />
                <p>Confirmação</p>
            </div>
            <div className={`step ${currentStep >= 2 ? "active": ""}`}>
                <FiSend />
                <p>Envio</p>
            </div>
        </div>
    )
}
