import './App.css';
import Table from './Table';

function App() {

    let dataHeader = ['SPECIES','FINISHING','THICKNESS, MM','WIDTH, MM','LENGTH, MM','PRICE PER M'+String.fromCharCode(179)];
    let data = [['Brazilian, Italian','KD, PL, RO, KK, RK','15','140','1800 / 2440','€149'],
                ['German','KD, PL, RO, KK, RK','15','140','1800 / 2440','€144'],
                ['Ukrainian, English','RK','15','140','1800 / 2440','€155'],
                ['Brazilian, Italian','KD, PL, RO, KK, RK','15','140','1800 / 2440','€217']
    ];

    return (
        <div className="App">
            <header className="App-header">

                <p>
                    Table
                </p>

                <Table headers={dataHeader} data={data} />



            </header>
        </div>
    );
}

export default App;
