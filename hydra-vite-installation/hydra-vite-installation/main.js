var hydra = new Hydra({ detectAudio: false })

osc(40,0.2,1)
  .modulateScale(osc(40,0,1).kaleid(8))
  .repeat(2,4)
  .modulate(o0,0.05)
  .modulateKaleid(shape(4,0.1,1))
  .out(o0)