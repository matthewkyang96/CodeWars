function alternateCase(s) {
    return s.split('').map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('');
}