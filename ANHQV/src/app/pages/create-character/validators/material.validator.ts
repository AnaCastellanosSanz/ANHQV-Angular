import { AbstractControl, ValidatorFn } from "@angular/forms";

// Devolver una función que devuelva a su vez null si no hay errores,
// o un objeto con los errores en casod e que los haya.
export function incredibleEpisode(): ValidatorFn {
    return (control: AbstractControl) => {
        const isincredible = control.value === '1X05 - ÉRASE UN NIÑO';
        return isincredible ? {
            isincredible: true
        } : null;
    };
};