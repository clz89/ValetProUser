




const sortedData = data.sort((a, b) => {
    const dateAInMillis = (new Date(a.createdAt)).getTime();
    const dateBInMillis = (new Date(b.createdAt)).getTime();
    
    return dateBInMillis - dateAInMillis;})