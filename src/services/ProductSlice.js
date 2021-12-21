import {createSlice} from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: {
                newProduct: [
                    {id: 1, url: 'https://images.ru.prom.st/891751863_w200_h200_prokat-malyarnaya-lampa.jpg', title: 'Prožektori', description: 'LED lampa, uzlādējama, šaura leņķa', price: '230.00 €', oldPrice: '250.00 €', top: false, discount: true, newPr: true},
                    {id: 2, url: 'https://sklep.spinex.pl/uploads/prod/wibrator_do_betonu_rokamat_bezprzewodowy.jpg', title: 'Betona vibratori', description: 'Dziļumvibrators ar 18V/5,2 Ah akumulatoru (kompl. 2 gb), ROKAMAT', price: '1 212.00 €', oldPrice: '1 335.00 €', top: true, discount: true, newPr: true},
                    {id: 3,url: 'https://st46.stpulscen.ru/images/product/274/063/816_big.jpg', title: 'Celtniecības iekārtas un instrumenti', description: 'Akumulatora izolācijas materiālu zāģis ISC 240 EB-Basic', price: '493.68 €', oldPrice: null, top: false, discount: false, newPr: true},
                    {id: 4,url: 'https://avatars.mds.yandex.net/i?id=8b9bb21f2b936a3eacde004da4235d8f-4104102-images-thumbs&n=13', title: 'Akumulatora instrumenti', description: 'Svaiga apmetuma slīpmašīna ar akumulatoru, ROKAMAT', price: '230.00 €', oldPrice: null, top: true, discount: false, newPr: true},
                    {id: 5,url: 'https://www.schoonewiltechnieknijverdal.nl/wp-content/uploads/2020/03/Rokamat-FOX-scaled.jpg', title: 'Celtniecības iekārtas un instrumenti', description: 'FOX sausu virsmu un izolācijas plākšņu slīpmašīņa ar akumulatoru', price: '1 788.00 €', oldPrice: null, top: true, discount: false, newPr: true},
                ],
                discount: [
                    {id: 6, url: 'https://sklep.spinex.pl/uploads/prod/wibrator_do_betonu_rokamat_bezprzewodowy.jpg', title: 'Betona vibratori', description: 'Dziļumvibrators ar 18V/5,2 Ah akumulatoru (kompl. 2 gb), ROKAMAT', price: '1 212.00 €', oldPrice: '1 335.00 €', top: true, discount: true, newPr: true},
                    {id: 7, url: 'https://makitarussia.ru/wa-data/public/shop/products/56/40/4056/images/4793/4793.750x0.jpg', title: 'Prožektori', description: 'LED lampa, uzlādējama, šaura leņķa', price: '230.00 €', oldPrice: '230.00 €', top: false, discount: true, newPr: false},
                    {id: 8,url: 'https://avatars.mds.yandex.net/i?id=8b9bb21f2b936a3eacde004da4235d8f-4104102-images-thumbs&n=13', title: 'Akumulatora instrumenti', description: 'Svaiga apmetuma slīpmašīna ar akumulatoru, ROKAMAT', price: '1 795.00 €', oldPrice: '1 950.00 €', top: false, discount: true, newPr: false},
                    {id: 9, url: 'https://images.ru.prom.st/891751863_w200_h200_prokat-malyarnaya-lampa.jpg', title: 'Prožektori', description: 'LED lampa, uzlādējama, šaura leņķa', price: '230.00', oldPrice: '250.00 €', top: false, discount: true, newPr: false},
                    {id: 10,url: 'https://st46.stpulscen.ru/images/product/274/063/816_big.jpg', title: 'Celtniecības iekārtas un instrumenti', description: 'Akumulatora izolācijas materiālu zāģis ISC 240 EB-Basic', price: '493.68 €', oldPrice: '548.99 €', top: false, discount: true, newPr: false},
                ],
                top: [
                    {id: 11,url: 'https://avatars.mds.yandex.net/i?id=8b9bb21f2b936a3eacde004da4235d8f-4104102-images-thumbs&n=13', title: 'Akumulatora instrumenti', description: 'Svaiga apmetuma slīpmašīna ar akumulatoru, ROKAMAT', price: '230.00 €', oldPrice: '1 950.00 €', top: true, discount: true, newPr: false},
                    {id: 12,url: 'https://st46.stpulscen.ru/images/product/274/063/816_big.jpg', title: 'Celtniecības iekārtas un instrumenti', description: 'Akumulatora izolācijas materiālu zāģis ISC 240 EB-Basic', price: '493.68 €', oldPrice: null, top: true, discount: false, newPr: false},
                    {id: 13, url: 'https://images.ru.prom.st/891751863_w200_h200_prokat-malyarnaya-lampa.jpg', title: 'Prožektori', description: 'LED lampa, uzlādējama, šaura leņķa', price: '230.00 €', oldPrice: null, top: true, discount: false, newPr: false},
                    {id: 14, url: 'https://makitarussia.ru/wa-data/public/shop/products/56/40/4056/images/4793/4793.750x0.jpg', title: 'Prožektori', description: 'LED lampa, uzlādējama, šaura leņķa', price: '230.00 €', oldPrice: null, top: true, discount: false, newPr: false},
                    {id: 15, url: 'https://sklep.spinex.pl/uploads/prod/wibrator_do_betonu_rokamat_bezprzewodowy.jpg', title: 'Betona vibratori', description: 'Dziļumvibrators ar 18V/5,2 Ah akumulatoru (kompl. 2 gb), ROKAMAT', price: '1 212.00 €', oldPrice: null, top: true, discount: false, newPr: false},

                ]
            }
    },
    reducers: {

    },
    extraReducers: {

    }
})

export default productSlice.reducer