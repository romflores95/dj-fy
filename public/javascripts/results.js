
// renders party pie chart
get('/party', {}, function(party) {
    data = {
        datasets: [{
            label: 'Most Popular Genres',
            data: [10, 20, 30, 10, 5],
            backgroundColor: [
                'red',
                'yellow',
                'blue',
                'green',
                'pink']
    
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Pop',
            'Hip-Hop/Rap',
            'Latin',
            'EDM',
            'Throwbacks'
        ]
    
    };


    // render party name
    const partyName = document.getElementById("party-name");
    partyName.innerHTML = party.name + " Top Genre Requests";

    // update data

    var genreData = [];

    //TODO: Generalize
    genreData.push(party.pop);
    genreData.push(party.hipHop);
    genreData.push(party.latin);
    genreData.push(party.edm);
    genreData.push(party.throwbacks);

    data.datasets[0].data = genreData;


    // TODO Abstract into function
    // For a pie chart
    var ctx = document.getElementById("genre-chart");

    var myPieChart = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: {
            legend: {
                display: false
            },
            pieceLabel: {
              render: 'label',
              fontSize: 20,
              fontStyle: 'bold',
              fontColor: '#000',
              fontFamily: '"Lucida Console", Monaco, monospace'
            }
          }
    });

    


    },
    function(error){ console.log(error);});






