function names(list){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    console.log(list.match(pattern).join(' '));
}
names("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")