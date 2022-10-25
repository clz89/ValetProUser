import React, {useEffect} from "react"

const Modal = ({modalid, setModal, setFormData, formData}) => {

    const handleModal = () => {
        setModal(false)
    }

    const handleChange = event => {
        setFormData({
        name: event.target.name,
        value: event.target.value
        })
        setModal(false)
    }
     
    return (
        <div className='backshadow'>
            <div className='custom-modal'>
                <div className="delete-icon"
                onClick={handleModal}>x</div>
                {modalid==="vcolor" &&(
                <div>
                    <button name="vcolor" value="White" onClick={handleChange}>White</button>
                    <button name="vcolor"  value="Black" onClick={handleChange} >Black</button>
                    <button name="vcolor"  value="Gray" onClick={handleChange} >Gray</button>
                    <button name="vcolor"  value="Silver" onClick={handleChange} >Silver</button>
                    <button name="vcolor"  value="Blue" onClick={handleChange} >Blue</button>
                    <button name="vcolor"  value="Red" onClick={handleChange} >Red</button>
                    <button name="vcolor"  value="Green" onClick={handleChange} >Green</button>
                    <button name="vcolor"  value="Tan" onClick={handleChange} >Tan</button>
                    <button name="vcolor"  value="Brown" onClick={handleChange} >Brown</button>
                    <button name="vcolor"  value="Burgundy" onClick={handleChange} >Burgundy</button>
                    <button name="vcolor"  value="Purple" onClick={handleChange} >Purple</button>
                    <button name="vcolor"  value="Pink" onClick={handleChange} >Pink</button>
                </div>)}

                {modalid==="vmake" &&(
                <div>
                    <button name="vmake" value="Acura" onClick={handleChange}>Acura</button>
                    <button name="vmake"  value="Alfa Romeo" onClick={handleChange} >Alfa Romeo</button>
                    <button name="vmake"  value="Audi" onClick={handleChange} >Audi</button>
                    <button name="vmake"  value="BMW" onClick={handleChange} >BMW</button>
                    <button name="vmake"  value="Bentley" onClick={handleChange} >Bentley</button>
                    <button name="vmake"  value="Buick" onClick={handleChange} >Buick</button>
                    <button name="vmake"  value="Cadillac" onClick={handleChange} >Cadillac</button>
                    <button name="vmake"  value="Chevrolet" onClick={handleChange} >Chevrolet</button>
                    <button name="vmake"  value="Chrysler" onClick={handleChange} >Chrysler</button>
                    <button name="vmake"  value="Dodge" onClick={handleChange} >Dodge</button>
                    <button name="vmake"  value="Fiat" onClick={handleChange} >Fiat</button>
                    <button name="vmake"  value="Ford" onClick={handleChange} >Ford</button>
                    <button name="vmake"  value="GMC" onClick={handleChange} >GMC</button>
                    <button name="vmake"  value="Genesis" onClick={handleChange} >Genesis</button>
                    <button name="vmake"  value="Honda" onClick={handleChange} >Honda</button>
                    <button name="vmake"  value="Hyundai" onClick={handleChange} >Hyundai</button>
                    <button name="vmake"  value="Infiniti" onClick={handleChange} >Infiniti</button>
                    <button name="vmake"  value="Jaguar" onClick={handleChange} >Jaguar</button>
                    <button name="vmake"  value="Jeep" onClick={handleChange} >Jeep</button>
                    <button name="vmake"  value="Kia" onClick={handleChange} >Kia</button>
                    <button name="vmake"  value="Land Rover" onClick={handleChange} >Land Rover</button>
                    <button name="vmake"  value="Lexus" onClick={handleChange} >Lexus</button>
                    <button name="vmake"  value="Lincoln" onClick={handleChange} >Lincoln</button>
                    <button name="vmake"  value="Lotus" onClick={handleChange} >Lotus</button>
                    <button name="vmake"  value="Maserati" onClick={handleChange} >Maserati</button>
                    <button name="vmake"  value="Mazda" onClick={handleChange} >Mazda</button>
                    <button name="vmake"  value="Mercedes-Benz" onClick={handleChange} >Mercedes-Benz</button>
                    <button name="vmake"  value="Mercury" onClick={handleChange} >Mercury</button>
                    <button name="vmake"  value="Mini" onClick={handleChange} >Mini</button>
                    <button name="vmake"  value="Mitsubishi" onClick={handleChange} >Mitsubishi</button>
                    <button name="vmake"  value="Nissan" onClick={handleChange} >Nissan</button>
                    <button name="vmake"  value="Polestar" onClick={handleChange} >Polestar</button>
                    <button name="vmake"  value="Pontiac" onClick={handleChange} >Pontiac</button>
                    <button name="vmake"  value="Porsche" onClick={handleChange} >Porsche</button>
                    <button name="vmake"  value="Ram" onClick={handleChange} >Ram</button> 
                    <button name="vmake"  value="Range-Rover" onClick={handleChange} >Range-Rover</button>                   
                    <button name="vmake"  value="Rivian" onClick={handleChange} >Rivian</button>
                    <button name="vmake"  value="Rolls-Royce" onClick={handleChange} >Rolls-Royce</button>
                    <button name="vmake"  value="Saab" onClick={handleChange} >Saab</button>
                    <button name="vmake"  value="Saturn" onClick={handleChange} >Saturn</button>
                    <button name="vmake"  value="Scion" onClick={handleChange} >Scion</button>
                    <button name="vmake"  value="Smart" onClick={handleChange} >Smart</button>
                    <button name="vmake"  value="Subaru" onClick={handleChange} >Subaru</button>
                    <button name="vmake"  value="Suzuki" onClick={handleChange} >Suzuki</button>
                    <button name="vmake"  value="Tesla" onClick={handleChange} >Tesla</button>
                    <button name="vmake"  value="Toyota" onClick={handleChange} >Toyota</button>
                    <button name="vmake"  value="Volkswagen" onClick={handleChange} >Volkswagen</button>
                    <button name="vmake"  value="Volvo" onClick={handleChange} >Volvo</button>


                </div>)}

                {modalid==="price" &&(
                <div>
                    <button name="price" value="$44" onClick={handleChange}>$44</button>
                    <button name="price"  value="$20" onClick={handleChange} >$20</button>
                    <button name="price"  value="$10" onClick={handleChange} >$10</button>
                    <button name="price"  value="$7" onClick={handleChange} >$7</button>
                    <button name="price"  value="$17" onClick={handleChange} >$17</button>
                    <button name="price"  value="$15" onClick={handleChange} >$15</button>
                    <button name="price"  value="$14" onClick={handleChange} >$14</button>
                    <button name="price"  value="$13" onClick={handleChange} >$13</button>
                    <button name="price"  value="$12" onClick={handleChange} >$12</button>
                    <button name="price"  value="Hosted1" onClick={handleChange} >Hosted1</button>
                    <button name="price"  value="Hosted2" onClick={handleChange} >Hosted2</button>
                    <button name="price"  value="Hosted3" onClick={handleChange} >Hosted3</button>
                    <button name="price"  value="Hosted4" onClick={handleChange} >Hosted4</button>
                    <button name="price"  value="Hosted5" onClick={handleChange} >Hosted5</button>
                    <button name="price"  value="Comp" onClick={handleChange} >Comp</button>
                </div>)}
            </div>  
        </div>
    )
}
export default Modal;