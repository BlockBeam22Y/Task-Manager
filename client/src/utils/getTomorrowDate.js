function getTomorrowDate() {
    const tomorrow = new Date(new Date().valueOf() + 24 * 3600 * 1000);
    const year = tomorrow.getFullYear();
    const month = tomorrow.getMonth() + 1;
    const date = tomorrow.getDate();

    return (
        year + '-' +
        (month < 10 ? '0' : '') + month + '-' +
        (date < 10 ? '0' : '') + date
    );
}

export default getTomorrowDate;