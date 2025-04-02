const fs = require('fs')
fs.writeFileSync('F:/AIUB/Spring-Semester-2024-25/Advanced WT/Mid/Lab/abc.doc', 'Hello Bishal')
const a=fs.readFileSync('F:/AIUB/Spring-Semester-2024-25/Advanced WT/Mid/Lab/abc.doc')
console.log(a.toString());
