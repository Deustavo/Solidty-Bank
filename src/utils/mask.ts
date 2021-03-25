export const maskCPF = ( cpfValue: string ) => {
    const maskParts = [];

    const numberOfParts = Math.ceil(cpfValue.length / 3);

    for ( let i = 0; i < numberOfParts; i++ ) {
        maskParts.push( cpfValue.slice(3 * i, (3 * i + 3)) );
    }

    const mask = `${ maskParts.slice(0, 3).join('.') }${ maskParts.slice(3).length === 0 ? '' : `-${ maskParts.slice(3).join('') }` }`;

    return mask;
}

export const removeMaskCPF = ( mask: string ) => {
    return mask.split('').filter( char => !isNaN(Number(char)) ).join('');
}