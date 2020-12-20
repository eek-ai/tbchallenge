const initialState = {

    columns: {
        name:{
            style:'left',
        },
        species:{
            title:'SPECIES',
            style:'left',
        },
        finishing:{
            title:'FINISHING',
            style:'left',
        },
        thickness:{
            title:'THICKNESS, MM',
            style:'right',
        },
        width:{
            title:'WIDTH, MM',
        },
        length:{
            title:'LENGTH, MM',
        },
        price:{
            title:'PRICE PER M' + String.fromCharCode(179),
            style:'right',
        },
    },

    rows: [],
}

export default initialState;