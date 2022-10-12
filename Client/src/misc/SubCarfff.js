export default function SubCar() {
    return(
        <form>
            <section className="sub-car-form">
               <table>
                  <tr>
                     <td>Ticket #: <input type="text" /></td>
                     <td>Price: <input type="text" /> Location: </td>
                  </tr>
                  <tr>
                     <td>Name: <input type="text" /></td>
                     <td>VIP: <input type="text" /></td>
                  </tr>
                  <tr>
                     <td>Room: <input type="text" /></td>
                     <td>Retrieve at: <input type="text" /></td>
                  </tr>
                  <tr>
                     <td>Departure: <input type="text" /></td>
                     <td>Out front: <input type="text" /></td>
                  </tr>
                  <tr>
                     <td>Vehicle make: <input type="text" /></td>
                     <td>Notes: <input type="text" /></td>
                  </tr>
                  <tr>
                     <td>Vehicle model: <input type="text" /></td>
                     <td>Parking Spot: <input type="text" /></td>
                  </tr>
                  <tr>
                     <td>Vehicle color: <input type="text" /></td>
                     <td>License: <input type="text" /></td>
                  </tr>
              </table>
            </section>
        </form>
    )
}

<form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <label>
            <p>Ticket #:</p>
            <input name="ticket" onChange={handleChange} value={formData.ticket || ''} />
          </label>
          <label>
            <p>Price:</p>
            <select name="price" onChange={handleChange} value={formData.price || ''}>
                <option value="">--Please choose an option--</option>
                <option value="fuji">Fuji</option>
                <option value="jonathan">Jonathan</option>
                <option value="honey-crisp">Honey Crisp</option>
            </select>
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
        <label>
             <p>Name:</p>
             <input name="name" onChange={handleChange} value={formData.name || ''} />
          </label>
          <label>
            <p>VIP:</p>
            <input
              checked={formData['vip'] || false}
              disabled={formData.vip !== 'fuji'}
              name="vip"
              onChange={handleChange}
              type="checkbox"
            />
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
        <label>
             <p>Room:</p>
             <input name="room" onChange={handleChange} value={formData.room || ''} />
          </label>
          <label>
             <p>Retrieve at:</p>
             <input name="retrieve" onChange={handleChange} value={formData.retrieve || ''} />
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
        <label>
             <p>Departure:</p>
             <input name="depart" onChange={handleChange} value={formData.depart || ''} />
          </label>
          <label>
            <p>Out front:</p>
            <input
              checked={formData['outfront'] || false}
              disabled={formData.outfront !== 'fuji'}
              name="outfront"
              onChange={handleChange}
              type="checkbox"
            />
          </label>
          <label>
             <p>Vehicle make:</p>
             <input name="vmake" onChange={handleChange} value={formData.vmake || ''} />
          </label>
          <label>
             <p>Notes:</p>
             <textfield name="notes" onChange={handleChange} value={formData.notes || ''} />
          </label>
          <label>
            <p>Vehicle color:</p>
            <select name="vcolor" onChange={handleChange} value={formData.vcolor || ''}>
                <option value="">--Please choose an option--</option>
                <option value="fuji">Fuji</option>
                <option value="jonathan">Jonathan</option>
                <option value="honey-crisp">Honey Crisp</option>
            </select>
            <label>
            <p>Parking spot:</p>
            <input name="pspot" onChange={handleChange} value={formData.pspot || ''} />
          </label>
          </label>
          <label>
             <p>Vehicle model:</p>
             <input name="vmodel" onChange={handleChange} value={formData.vmodel || ''} />
          </label>
          <label>
             <p>License plate #:</p>
             <textfield name="license" onChange={handleChange} value={formData.license || ''} />
          </label>
        </fieldset>
        <button type="submit" disabled={submitting}>Submit</button>
      </form>



room: savedNotes.room ? savedNotes.room : 880, price: savedNotes.price ? savedNotes.price : "fuji", 
    ticket: savedNotes.ticket, name: savedNotes.name, vip: savedNotes.vip, retrieve: savedNotes.retrieve, 
    depart: savedNotes.depart, outfront: savedNotes.outfront, vmake: savedNotes.vmake, notes: savedNotes.notes, 
    vcolor: savedNotes.vcolor, pspot: savedNotes.pspot, vmodel: savedNotes.vmodel,
    license: savedNotes.license,

    const json = JSON.stringify(state);
    localStorage.setItem("form-data", json);

    const json = localStorage.getItem("form-data");
  const savedNotes = JSON.parse(json);

  <input className="inp" type="text" placeholder="search..." onChange={(event)=>{
   setSearchTerm(event.target.value);}}
   />

   const json = localStorage.getItem("posts");
  const postss = JSON.parse(json);

  tableData.filter((data) => {
   if (id === data._id) {
   setId(data)
   }
 })

 {submitting &&
   <div>
     You are submitting the following:
     <ul>
       {Object.entries(formData).map(([name, value]) => (
         <li key={name}><strong>{name}</strong>: {value.toString()}</li>
       ))}
            </ul>
        </div>
      }