const initialState = {

    columns: {
        id:{
            style:'left',
        },
        name:{
            title:'NAME',
            style:'left',
        },
        species:{
            title:'SPECIES',
            style:'left',
            label: true,
            icon:'tree'
        },
        finishing:{
            title:'FINISHING',
            style:'left',
            label: true,
            icon:'gear'
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
        favorite:{
            title:'',
        }
    },

    rows: [],
    filters:''
}

export default initialState;