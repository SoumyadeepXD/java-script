const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}` )
}

const prr=["js","rb","cpp","py","java"]
for (const key in prr) {
    console.log(prr[key])
}