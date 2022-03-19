let body=document.querySelector('body')
let divInterruptor=document.createElement('div')

let interruptor_off=document.createElement('img')
interruptor_off.setAttribute('src', 'interruptor_desligado.png')

let divLampada=document.createElement('div')

let lampada_off=document.createElement('img')
lampada_off.setAttribute('src', 'desligada.png')

divInterruptor.append(interruptor_off)
divLampada.append(lampada_off)
body.append(divInterruptor)
body.append(divLampada)

interruptor_off.onClick= function(){
    console.log('1')
if(interruptor_off.src.match('desligado')){
    console.log('2')
    interruptor_off.append('interruptor_on.png')
    lampada_off.append('ligada.png')
    divInterruptor.setAttribute('style', 'background_color; yellow;')
    divLampada.setAttribute('style', 'background_color; yellow;')
    body.setAttribute('style', 'background_color; yellow;')
}else if(interruptor_off.src.match('on')){
    console.log('3')
    interruptor_off.append('interruptor_desligado.png')
    lampada_off.append('desligada.png')
    divInterruptor.setAttribute('style', 'background_color; black;')
    divLampada.setAttribute('style', 'background_color; black;')
    body.setAttribute('style', 'background_color; black;')
}
}

