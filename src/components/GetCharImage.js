export const getCharacterImage = (sanrioChar) => {
    let url = '../../../public/sanriopng/';
    if(sanrioChar == 'Badtz-Maru') {
        url = url + 'badtzmaru.png';
    }
    else if(sanrioChar == 'Chococat') {
        url = url + 'chococat.png';
    }
    else if(sanrioChar == 'Cinnamoroll') {
        url = url + 'cinnamoroll.png';
    }
    else if(sanrioChar == 'Hello Kitty') {
        url = url + 'hellokitty.png';
    }
    else if(sanrioChar == 'Keroppi') {
        url = url + 'keroppi.png';
    }
    else if(sanrioChar == 'Kuromi') {
        url = url + 'kuromi.png';
    }
    else if(sanrioChar == 'My Melody') {
        url = url + 'mymelody.png';
    }
    else if(sanrioChar == 'Pochacco') {
        url = url + 'pochacco.png';
    }
    else if(sanrioChar == 'Pompompurin') {
        url = url + 'pompompurin.png';
    }
    else {
        url = url + 'pompompurin.png';
    }
    return url;
}