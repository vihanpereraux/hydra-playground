// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false })

osc(60, 0.1, 0.5)
    .rotate( () => time*0.5 )
    .scale( () => Math.sin(120) ,2 ,15)
    .brightness( () => Math.sin(time*2)*0.5 )
    .color(
        () => Math.sin(time), 
        [0.1, 0.2, 0.3],
        0.1)
    .saturate(() => Math.sin(time))
    .modulateRepeat(
        noise(
            5, 0.5)
    )
    .out(o0)
