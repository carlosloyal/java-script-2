const mensaje = prompt('Welcome to the best pizza in Bogota, please go ahead write the type of pizza you want: "family", "personal" or "median"')

if (mensaje === 'personal'){
    let tipopizza = prompt('What flavor of "mushroom", "Hawaiian" or "meat" pizza do you want?')

    if(tipopizza === 'mushrooms'){
        let contenidos = prompt('would you like your personal mushroom pizza to have "1-cheese" or "2-no cheese"')
        switch (contenidos) {
            case '1':
                alert('your pizza will be a personal mushroom with cheese')
                break;
            case '2':
                let segundocontenido = prompt('want with "1-sandwich edge" or "2-with sauce"')
                switch (segundocontenido) {
                    case '1':
                        alert('your pizza will be a cheeseless mushroom personal with sandwich edge')
                        break;
                    case '2':
                        alert('your pizza will be a personal cheeseless mushroom pizza with sauce')
                        break;
                
                    default:
                    alert('please enter a valid value either 1 0 2')
                        break;
                }
                break;
        
            default:
                alert('please enter a valid value')
                break;
        } 
    }else if(tipopizza === 'Hawaiian'){
        let contenidos = prompt('Do you want the pizza with "1-salami" or "2-no salami"')
        switch (contenidos) {
            case '1':
                let segundocontenido = prompt('you want your personal Hawaiian pizza with "1-no pineapple" "2-no ham"')
                switch (segundocontenido) {
                    case '1':
                        alert('your pizza will be a personal Hawaiian with salami and no pineapple')
                        break;
                    case '2':
                        alert('your pizza will be a personal Hawaiian with salami and without ham')
                        break;
                
                    default:
                        alert('please enter a value either 1 or 2')
                        break;
                }
                break;
            case '2':
                let segundocontenido1 = prompt('you want your personal Hawaiian pizza with "1-no pineapple" "2-no ham"')
                switch (segundocontenido1) {
                    case '1':
                        alert('your pizza will be a personal Hawaiian without salami and without pineapple')
                        break;
                    case '2':
                        alert('your pizza will be a personal Hawaiian without salami and without ham')
                        break;
                
                    default:
                        alert('please enter a value either 1 or 2')
                        break;
                }
                break;

        
            default:
                break;
        
    
        }
    }else if(tipopizza === 'meats'){
        let contenidos = prompt('Do you want your personal meat pizza with 1-with salami or 2-without salami')
        switch (contenidos) {
            case '1':
            let segundocontenido = prompt('Do you want your personal meat pizza with "1-with cheese" or "2-without cheese"')
                switch (segundocontenido) {
                    case '1':
                        alert('your pizza will be a personal meat with salami and cheese')
                        break;
                    case '2':
                        alert('your pizza will be a personal meat with salami and no cheese')
                        break;
                
                    default:
                        alert('please enter a valid value either 1 or 2')
                        break;
                }
                break;
                case '2':
            let segundocontenido1 = prompt(' Do you want your personal meat pizza with "1-with cheese" or "2-without cheese"')
                switch (segundocontenido1) {
                    case '1':
                        alert('your pizza will be a personal meat without salami and with cheese')
                        break;
                    case '2':
                        alert('your pizza will be a personal meat without salami and without cheese')
                        break;
                
                    default:
                        alert('please enter a valid value either 1 or 2')
                        break;
                }
                break;
        
        
            default:
                alert('please enter a valid value')
                break;
        }
    }else{
        alert('please enter a valid value either "meats" "mushrooms" "hawaiian"')
    }
}else if(mensaje === 'family'){
    let tipopizza = prompt('What flavor of pizza do you want from "vegetarian", or "chicken and beef"')
    if(tipopizza === 'vegetariana'){
        let contenidos = prompt(' Do you want your vegetarian pizza "1-with cheese" or "2-without cheese"')
        switch (contenidos) {
            case '1':
                alert('your pizza will be a family vegetarian with cheese')
                break;
            case '2':
                alert('your pizza will be a vegetarian family without cheese')
                break;
        
        
            default:
            alert('please enter a valid value either 1 or 2')
                break;
        }

    }else if (tipopizza === 'chicken and meat'){
        let contenidos = prompt('would you like your pizza with "1-addition of sausage" or "2-addition of mushrooms" or "3-without neither" or "4-with both"')
            switch (contenidos) {
                case '1':
                    alert('Your family pizza will be a chicken and beef pizza with added sausage.')
                    break;
                case '2':
                    alert('Your family pizza will be a chicken and beef pizza with the addition of mushrooms.')
                    break;
                case '3':
                    alert('your family pizza will be a chicken and beef')
                    break;
                case '4':
                    alert('Your family pizza will be a chicken and beef pizza with the addition of mushrooms and the addition of sausage. ')
                    break;
            
                default:
                    alert('please enter a valid value either 1, 2, 3 or 4')
                    break;
            }
    }else{
        alert('please enter a valid value either "vegetarian" or "chicken and beef"')
    }

}else if(mensaje === 'median'){
    let tipopizza = prompt('what flavor do you want from "criolla" or "mexican" pizza')
    if(tipopizza === 'criolla'){
        let contenidos = prompt('want your pizza with "1-extra ground beef" or "2-with cheese"')
        switch (contenidos) {
            case '1':
                let segundocontenido1 = prompt('want your medium creole pizza with "1-nachos" or "2-no nachos"')
                switch (segundocontenido1) {
                    case '1':
                        alert('your pizza will be a medium criolla with extra ground beef and nachos')
                        break;
                    case '2':
                        alert('your pizza will be a medium criolla with extra ground beef and no nachos')
                        break;
                
                    default:
                    alert('please enter a valid number either 1 or 2')
                        break;
                }
                break;
            case '2':
                let segundocontenido2 = prompt(' Do you want your medium criolla pizza with "1-nachos" or "2-no nachos"')
                switch (segundocontenido2) {
                    case '1':
                        alert('your pizza will be a medium cheese criolla with nachos')
                        break;
                    case '2':
                        alert('your pizza will be a medium cheese criolla without nachos')
                        break;
                
                    default:
                        alert('please enter a valid value either 1 or 2')
                        break;
                }
                break;
        
            default:
                alert('enter a valid value')
                break;
        }


    }else if(tipopizza ==='mexican'){
         let contenidos = prompt('Do you want your pizza with "1-extra guacamole" or "2-no guacamole"')
        switch (contenidos) {
            case '1':
                let segundocontenido1 = prompt(' Do you want your medium Mexican pizza with "1-nachos" or "2-no nachos"')
                switch (segundocontenido1) {
                    case '1':
                        alert('your pizza will be a medium mexican with extra guacamole and nachos')
                        break;
                    case '2':
                        alert('your pizza will be a medium mexican with extra extra guacamole and no nachos')
                        break;
                
                    default:
                    alert('please enter a valid number either 1 or 2')
                        break;
                }
                break;
            case '2':
                let segundocontenido2 = prompt(' Do you want your medium Mexican pizza with "1-nachos" or "2-no nachos"')
                switch (segundocontenido2) {
                    case '1':
                        alert('your pizza will be a medium mexican without extra guacamole with nachos')
                        break;
                    case '2':
                        alert('your pizza will be a medium mexican without extra guacamole and without nachos')
                        break;
                
                    default:
                        alert('please enter a valid value either 1 or 2')
                        break;
                }
                break;
        
            default:
                alert('enter a valid value')
                break;
        }


    }else{
        alert('please enter a valid value either "Criolla" or "Mexican')
    }
}else{
    alert('please enter a value either "family", "personal" or "median"')
}
