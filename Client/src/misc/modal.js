
export const Button = ({serModal}) => {
    return (
        <button className='btn btn-primary btn-md'
        onClick={()=>setModal(true)}>Open Modal</button>
        )
}


export const Modal = ({setModal}) => {
    return (
        <div className='backshadow'>
            <div className='custom-modal'>
                <div className="delete-icon"
                onClick={()=>setModal(false)}>x</div>
            </div>
        </div>
    )
}

const [modal, setModal] = useState(false);

<Button setModal={setModal}/>
{modal===true&&(
<Modal setModal={setModal}/>)}

.backshadow{
    width:100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}

.backshadow .custom-modal{
    width: 500px;
    height: 500px;
    background-color: #fff
    position: relative;
}

.delete-icon{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: red;
    color:: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    front-weight: 600;
    curser: pointer;
    position: absolute;
    top: -15px;
    right: -15px;
}