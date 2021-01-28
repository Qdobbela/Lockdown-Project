sessionStorage.setItem('pc1', true);
sessionStorage.setItem('pc2', false);
sessionStorage.setItem('pc3', false);
sessionStorage.setItem('pc4', false);
sessionStorage.setItem('pcceo', false);



const unlockComputer = (computer) => {
    sessionStorage.setItem(computer, true);
}
const lockComputer = (computer) => {
    sessionStorage.setItem(computer, false);
}

console.log(sessionStorage.getItem(pc1))

