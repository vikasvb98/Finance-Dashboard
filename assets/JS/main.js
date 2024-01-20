const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [20, '',25, '',30, '',35, '' ,40,'',60,'',65],
    datasets: [{
      label: 'Employer: K 73,500',
      backgroundColor: 'rgb(31, 12, 204)',
      data: [20, 25, 30, 35, 40, 50, 55, 60, 70, 75, 80, 85, 90],
    },
    {
        label: 'Employee: K 53,500',
        backgroundColor: 'rgb(96, 83, 219)',
        data: [40, 50, 60, 70, 80, 90, 100, 110, 120, 135, 150, 170, 190],
      },
      {
        label: 'Total Interest: K 244,313',
        backgroundColor: 'rgb(177, 170, 240)',
        data: [80, 90, 98, 110, 130, 155, 175, 190, 210, 230, 260, 285, 310],
      }]
  },
  options: {
    plugins:{
        legend: {
            labels:{
                usePointStyle: true,
                PointStyle: 'circle'
            }
        }
    },
    scales: {
      x:{
        stacked: true,
        grid:{
            drawOnChartArea: false
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
            maxTicksLimit: 5,
            callback: ((context, index) => {
                console.log(context)
                let response;
                if (context === 100){
                    response = '$ 100'
                } else if (context === 200){
                    response = '$ 200'
                } else if (context === 300){
                    response = '$ 300'
                }else if (context === 400){
                    response = '$ 400'
                }else {
                    response = '0'
                }
                return response;
            })
        }
      }
    },
  }
});

// Progress Bar
// let circularProgress = document.querySelector(".circular-progress"),
//     progressValue = document.querySelector(".progress-value");

// let progressStartValue = 0,
//     progressEndValue = 78,
//     speed = 100;

// let progress = setInterval(()=>{
//     progressStartValue++;

//     progressValue.textContent = `${progressStartValue}%`
//     circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

//     if(progressStartValue == progressEndValue){
//         clearInterval(progress);
//     }
// }, speed); 

function createCircularProgress(progressElement, endValue) {
    let progressStartValue = 0;
    let speed = 100;

    let progress = setInterval(() => {
        progressStartValue++;

        progressElement.querySelector('.progress-value').textContent = `${progressStartValue}%`;
        progressElement.style.background = `conic-gradient(rgb(62,46,223) ${progressStartValue * 3.6}deg, #ededed 0deg)`;

        if (progressStartValue === endValue) {
            clearInterval(progress);
        }
    }, speed);
}

let circularProgress1 = document.getElementById("progress1");
createCircularProgress(circularProgress1, 78);

let circularProgress2 = document.getElementById("progress2");
createCircularProgress(circularProgress2, 95);

let circularProgress3 = document.getElementById("progress3");
createCircularProgress(circularProgress3, 59);
