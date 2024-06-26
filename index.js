
let results = [];


let table = document.querySelector('table');


for (let i = 1; i < table.rows.length; i++) {
  let row = table.rows[i];
  let cells = row.cells;


  let result = {
    indexNumber: cells[0].innerText.trim(),
    name: cells[1].innerText.trim(),
    gender: cells[2].innerText.trim(),
    subjects: []
  };

  
  for (let j = 3; j < cells.length; j++) {
    result.subjects.push({
      subject: cells[j].dataset.subject,
      grade: cells[j].innerText.trim()
    });
  }


  results.push(result);
}

results;
