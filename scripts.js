var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Career timeline data
const items = new vis.DataSet([
    { id: 1, content: 'Senior Technical Product Manager', start: '2020-01-01', end: 'Present' },
    { id: 2, content: 'Software Engineer', start: '2015-06-01', end: '2019-12-31' },
    { id: 3, content: 'Intern', start: '2014-06-01', end: '2014-08-31' }
]);

// Timeline options
const options = {
    width: '100%',
    height: '300px',
    margin: { item: 10 },
    editable: false,
    stack: false,
    showCurrentTime: true,
    zoomable: true,
    orientation: { axis: 'top' }
};

// Create the timeline
const container = document.getElementById('career-timeline');
const timeline = new vis.Timeline(container, items, options);