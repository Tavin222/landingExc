AOS.init();

const dataDoEvento = new Date("Nov 12, 2024 20:00:00");
const timeStampEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();


    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diasAteEvento = Math.floor(distanciaEvento / (1000 * 60 * 60 * 24));
    const horasAteEvento = Math.floor((distanciaEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosAteEvento = Math.floor((distanciaEvento % (1000 * 60 * 60)) / (1000 * 60))
    const segundosAteEvento = Math.floor (distanciaEvento % (1000 * 60) / 1000);



    document.getElementById("contador").innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (dataDoEvento < 0){
        clearInterval(contaHoras);
        document.getElementById("contador").innerHTML = 'A festa já começou!'
    }
}, 1000);