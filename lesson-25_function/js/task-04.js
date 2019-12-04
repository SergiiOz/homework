// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
//  Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.


function areaQuadrangle(length, width = 0) {

    if (length > 0 && width > 0) {
        result = length * width; //if two parametrs

    } else {
        result = length * length; //if the one parametr 
    }

    console.log(result);

    return result;
}

//run function

areaQuadrangle(10, 15);