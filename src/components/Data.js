export function getData(dataKey) {
    let dataLabel;
    let chartDatasets = [];
    const currentYear = new Date().getFullYear();
    let datasets = [];
    let dataGenre = [];
    
    function getColor(number) {
        let color;

        if(number === 1) {
            color = 'rgb(157, 186, 230)'
        } else if (number === 2) {
            color = 'rgb(134, 81, 247)'
        } else {
            color = 'rgb(201, 42, 52)'
        }
        return color;
    }
    function getColorBackground(number) {
        let color;

        if(number === 1) {
            color = 'rgb(157, 186, 230, 0.2)'
        } else if (number === 2) {
            color = 'rgb(134, 81, 247, 0.2)'
        } else {
            color = 'rgb(201, 42, 52, 0.2)'
        }

        return color;
    }
    
    switch (dataKey) {
        case "month":
            dataLabel = Array.from({ length: 30 }, (_, i) => (i + 1).toString());
            dataGenre = [
                "Genre1",
                "Genre2",
                "Genre3"
            ]
            
            datasets = [
                [531, 370, 348, 38, 704,
                240, 290, 573, 667, 28,
                467, 643, 40, 994, 698,
                664, 439, 21, 532, 74,
                729, 914, 499, 87, 292,
                34, 608, 107, 524, 263],
                [18, 714, 533, 577, 165,
                501, 227, 329, 315, 20,
                831, 585, 565, 139, 76,
                436, 958, 323, 568, 142,
                998, 337, 754, 873, 857,
                197, 629, 538, 397, 223],
                [988, 880, 314, 971, 215,
                498, 376, 180, 923, 684,
                203, 301, 302, 985, 160,
                706, 122, 647, 414, 318,
                361, 670, 763, 347, 884,
                106, 7, 821, 615, 647]
            ];
            
            for (let i = 0; i < dataGenre.length; i++) {
                const name = dataGenre[i];
                const data = datasets[i];
                const chartDataset = {
                    label: name,
                    data: data,
                    borderColor: getColor(i),
                    backgroundColor: getColorBackground(i),
                    fill: true,
                    tension: 0.2,
                    pointStyle: 'circle',
                    pointRadius: 10,
                    pointHoverRadius: 15
                };
                chartDatasets.push(chartDataset);
            }
        break;
        
        case "year":
            dataLabel = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

            dataGenre = [
                "Genre1",
                "Genre2",
                "Genre3"
            ]

            datasets = [
                [501, 227, 329, 315, 20, 831, 585, 565, 139, 76,568, 142],
                [998, 337, 754, 873, 857, 197, 629, 538, 397, 223, 971, 215],
                [498, 376, 180, 923, 684, 203, 301, 302, 985, 160, 414, 318],
            ];
            
            for (let i = 0; i < dataGenre.length; i++) {
                const name = dataGenre[i];
                const data = datasets[i];
                const chartDataset = {
                    label: name,
                    data: data,
                    borderColor: getColor(i),
                    backgroundColor: getColorBackground(i),
                    fill: true,
                    tension: 0.2,
                    pointStyle: 'circle',
                    pointRadius: 10,
                    pointHoverRadius: 15
                };
                chartDatasets.push(chartDataset);
            }
        break;
        
        case "week":
            dataLabel = ["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo"];

            dataGenre = [
                "Genre1",
                "Genre2",
                "Genre3"
            ]

            datasets = [
                [157, 973, 866, 930, 334, 87, 386],
                [252, 116, 687, 914, 52, 943, 960],
                [355, 6, 609, 23, 649, 170, 168]
            ];
            
            for (let i = 0; i < dataGenre.length; i++) {
                
                const name = dataGenre[i];
                const data = datasets[i];
                const chartDataset = {
                    label: name,
                    data: data,
                    borderColor: getColor(i),
                    backgroundColor: getColorBackground(i),
                    fill: true,
                    tension: 0.2,
                    pointStyle: 'circle',
                    pointRadius: 10,
                    pointHoverRadius: 15
                };
                chartDatasets.push(chartDataset);
            }
        break;
        
        case "fiveYears":
            dataLabel = Array.from({ length: 5 }, (_, i) => (currentYear - 5 + i).toString());

            dataGenre = [
                "Genre1",
                "Genre2",
                "Genre3"
            ]


            datasets = [
                [5, 15, 15, 55, 4],
                [10, 0, 30, 4, 50], 
                [5, 15, 25, 5, 45]
            ];
            
            for (let i = 0; i < dataGenre.length; i++) {
                const name = dataGenre[i];
                const data = datasets[i];
                const chartDataset = {
                    label: name,
                    data: data,
                    borderColor: getColor(i),
                    backgroundColor: getColorBackground(i),
                    fill: true,
                    tension: 0.2,
                    pointStyle: 'circle',
                    pointRadius: 10,
                    pointHoverRadius: 15
                };
                chartDatasets.push(chartDataset);
            }
        break;
        
        default:
            dataLabel = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
            datasets = [
                [5, 15, 25, 35, 45],
                [10, 20, 30, 40, 50], 
                [5, 15, 25, 35, 45],
                [8, 18, 28, 38, 48],
                [8, 18, 28, 38, 48]
            ];
            chartDatasets = [];
            
            
            for (let i = 0; i < dataKey.length; i++) {
                const name = dataKey[i];
                const data = datasets[i];
                const chartDataset = {
                    label: name,
                    data: data,
                    borderColor: getColor(i),
                    backgroundColor: getColorBackground(i),
                    fill: true,
                    tension: 0.2,
                    pointStyle: 'circle',
                    pointRadius: 10,
                    pointHoverRadius: 15
                };
                chartDatasets.push(chartDataset);
            }
        break;
    }
    
    
    
    
    return {
        labels: dataLabel,
        datasets: chartDatasets
    };
}