
function getTimeDifference(reviewDate) {
    const currentDate = new Date();
    const reviewDateObj = new Date(reviewDate);

    // Calculate the difference in total days
    const diffInTime = currentDate.getTime() - reviewDateObj.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

    // Calculate years, months, weeks, and days
    const years = Math.floor(diffInDays / 365);
    const months = Math.floor((diffInDays % 365) / 30);
    const weeks = Math.floor((diffInDays % 365 % 30) / 7);
    const days = diffInDays % 365 % 30 % 7;

    let formattedDifference = '';

    if (years > 0) {
        formattedDifference += `${years} ${years === 1 ? 'year' : 'years'}`;
    } else if (months > 0) {
        formattedDifference += `${months} ${months === 1 ? 'month' : 'months'}`;
    } else if (weeks > 0) {
        formattedDifference += `${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
    } else if (days > 0) {
        formattedDifference += `${days} ${days === 1 ? 'day' : 'days'}`;
    } else {
        return 'Today';
    }

    return formattedDifference;
}

export default getTimeDifference;