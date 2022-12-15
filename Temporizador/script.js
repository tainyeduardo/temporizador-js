
    let h = 0;
    let min = 0;
    let seg = 0;
    let mili = 0;
    let tempo;

    
    
    const start = () =>{
        

        pause(); // para não deixar acumulativo 
        tempo = setInterval(() => {
            cronometro();
        }, 10);
    }


    const pause = () =>{
        clearInterval(tempo);
    }

    const reset = () =>{
        h = 00;
        min = 00;
        seg = 00;
        mili = 00;

        document.getElementById("temp").innerHTML = (h < 10 ? "0" + h : h) +
        " : " +
        (min < 10 ? "0" + min : min) +
        " : " +
        (seg < 10 ? "0" + seg : seg);
    }

    const cronometro = () =>{
        let hora = document.querySelector("#hora").value;
        let minuto = document.querySelector("#minuto").value;
        let segundo = document.querySelector("#segundo").value;

        if ((mili += 10) == 1000) {
            mili = 00;
            seg++;
            if (seg == segundo && min == minuto && h == hora) {
                clearInterval(tempo);
            }
            if (seg == 60) {
                seg = 00;
                min++;
                if (seg == segundo && min == minuto && h == hora) {
                    clearInterval(tempo);
                }
                if (min == 60) {
                    min = 00;
                    h++;
                    if (seg == segundo && min == minuto && h == hora) {
                        clearInterval(tempo);
                    }
                }
            }
        }

        document.getElementById("temp").innerHTML = (h < 10 ? "0" + h : h) +
        " : " +
        (min < 10 ? "0" + min : min) +
        " : " +
        (seg < 10 ? "0" + seg : seg);

    }
