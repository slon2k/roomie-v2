export const ageToString = (age) => {
    if (age % 100 >= 5 && age % 100 <= 20) {
        return `${age} лет`;
    }

    if (age % 10 === 1) {
        return `${age} год`;
    }

    if (age % 10 >= 2 && age % 10 <= 4) {
        return `${age} года`;
    }

    return `${age} лет`;
}