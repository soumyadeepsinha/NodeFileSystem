const file = require('fs');

file.mkdir('filesys',
  (err) => {
    console.log('Folder created');
    console.log('Error:', err);
  })

file.writeFile('filesys/test.txt', 'Hello World',
  (err) => {
    console.log('File created');
    console.log('Error:', err);
  })

file.appendFile('filesys/test.txt', ' This is a Node operation for I/O',
  (err) => {
    console.log('File written');
    console.log('Error:', err);
  }
)

file.readFile('filesys/test.txt', 'utf-8',
  (err, res) => {
    console.log(res);
    console.log('Task completed');
    console.log('Error:', err);
  })

file.unlink('filesys/test.txt', (err) => {
  console.log('File deleted successfully');
  console.log('Error: ', err);
})

file.rmdir('filesys', (err) => {
  console.log('Folder removed successfully');
  console.log('Error: ', err);
})