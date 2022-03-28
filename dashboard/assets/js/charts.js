const options = {
    series: [{
        name: "Active Users",
        data: [1, 3, 1, 2, 1, 3]
    }],
    chart: {
        height: 200,
        type: 'line',
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: true,
            color: '#563BFF',
            top: 0,
            left: 0,
            blur: 4,
            opacity: 0.2
        },
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0
    },
    colors: ['#563BFF'],
    stroke: {
        width: 4,
        curve: 'smooth'
    },
    title: {
        text: '',
        align: '',
        display: 'none'
    },
    grid: {
        show: false
    },
    xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        labels: {
            show: false
        }
    },
    annotations: {
        xaxis: [
            {
                x: 'Sat',
                strokeDashArray: 0,
                borderColor: "#775DD0",
                label: {
                    borderColor: "#775DD0",
                    style: {
                        color: "#fff",
                        background: "#775DD0"
                    },
                    text: "Now"
                }
            },
        ]
    },
    yaxis: {
        min: 0,
        step: 1,
        tickAmount: 4,
        labels: {
            show: false
        }
    }
};

export async function showChart() {
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    await chart.render();
}