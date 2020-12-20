const initialState = {
    data: {
        headers: ['SPECIES', 'FINISHING', 'THICKNESS, MM', 'WIDTH, MM', 'LENGTH, MM', 'PRICE PER M' + String.fromCharCode(179)],
        rows: [['Brazilian, Italian', 'KD, PL, RO, KK, RK', '15', '140', '1800 / 2440', '€149'],
            ['German', 'KD, PL, RO, KK, RK', '15', '140', '1800 / 2440', '€144'],
            ['Ukrainian, English', 'RK', '15', '140', '1800 / 2440', '€155'],
            ['Brazilian, Italian', 'KD, PL, RO, KK, RK', '15', '140', '1800 / 2440', '€217']
        ],
        show: {}
    },
}

export default initialState;