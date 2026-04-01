// Function that formats a number with blanks as thousands separators
export function formatNumber(num) {
    if (num === null || num === undefined) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}