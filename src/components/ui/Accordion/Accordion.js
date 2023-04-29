import { TbChevronDown } from 'react-icons/tb'
import './Accordion.css'
import {v4} from 'uuid'

export default function Accordion({title, content}) {
    const accordionId = v4();
    return (
        <div className='accordion bg-slate-50 p-3 rounded-md my-3'>
            <input id={accordionId} name='accordion' value={accordionId} type="radio" />
            <label htmlFor={accordionId} className="accordion-header flex justify-between items-center font-bold text-custom-blue-700 cursor-pointer py-2">
                <h4>
                    {title}
                </h4>
                <TbChevronDown className='text-base' />
            </label>
            <p className='accordion-body text-xs leading-7 text-slate-800 lg:text-sm lg:leading-8'>
                {content}
            </p>
        </div>
    )
}
