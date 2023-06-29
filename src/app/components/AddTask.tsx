import {AiOutlinePlusCircle} from 'react-icons/ai';

const AddTask=()=>{
    return (
        <div className="w-full flex flex-col item-center ">
            <button className=" flex justify-center bg-slate-400 text-sky-50 rounded-md p-4 bold">
                ADD NEW TASK <AiOutlinePlusCircle className="ml-3" size={25}/>
            </button>
        </div>
    );
};


export default AddTask;