export default class Data {
    _users = [
        "Катя Смирнова",
        "Асель Муратова",
        "Александра Винникова",
        "Александра Винникова",
        "Катя Смирнова",
        "Асель Муратова",
    ];
    _age = [
        "20 лет",
        "19 лет",
        "25 лет",
        "27 лет",
        "25 лет",
        "27 лет"
    ];
    _groupNames = [
        "Студенты-физики",
        "Студенты-физики",
        "Студенты-физики",
        "Студенты-физики",
        "Студенты-физики",
        "Студенты-физики"
    ];
    _cities =[
        "Алматы",
        "Астана",
        "Костанай",
        "Атырау",
        "Алматы",
        "Алматы"
    ];
    _usersInfo = [
        "Люблю кошек и поспать",
        "Привет, я из Астаны, сейчас учусь в КБТУ, ищу сожительниц-девушек!",
        "Люблю “Очень странные дела”, фотографировать, учу испанский.",
        "Люблю “Очень странные дела”, фотографировать, учу испанский."
    ];
    _groupsInfo = [
        "Привет! Мы ищем таких же увлеченных физикой студентов!",
        "Мы ищем студентов МУИТ, хотим снять квартитру недалеко от нашего университета. У нас есть собака, и мы не против других питомцев :)",
        "Привет! Мы ищем таких же увлеченных физикой студентов!",
        "Мы ищем студентов МУИТ, хотим снять квартитру недалеко от нашего университета. У нас есть собака, и мы не против других питомцев :)",
        "Привет! Мы ищем таких же увлеченных физикой студентов!",
        "Мы ищем студентов МУИТ, хотим снять квартитру недалеко от нашего университета. У нас есть собака, и мы не против других питомцев :)"
    ];
    _free = [0, 2, 2, 1, 0, 1];
    _imgPath = "https://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg";
    _rentalPeriods = [1, 3, 6, 9, 12, 3];
    _peopleNumbers = [2, 3, 4, 4, 4, 3];

    createGroup = (id, name, city, rentalPeriod, peopleNumber, free, info, members, applications, polls) => {
        return {
            id: id,
            name: name,
            city: city,
            rentalPeriod: rentalPeriod,
            peopleNumber: peopleNumber,
            free: free,
            info: info,
            members: members,
            applications: applications,
            polls: polls
        };
    };

    createUser = (id, name, age, city, info) => {
        return {
            id: id,
            name: name,
            age: age,
            city: city,
            info: info,
            imgPath: this._imgPath
        };
    };

    getUsers = async () => {
        let users = [];
        for (let i = 0; i < 6; i++) {
            let userId = i + 200;
            let userName = this._users[i];
            let age = this._age[i];
            let userCity = this._cities[i];
            let userInfo = this._usersInfo[i];

            let user = this.createUser(userId, userName, age, userCity, userInfo);
            users.push(user);
        }
        return users;
    };

    getGroups = async () => {
        const groups = [];
        for (let i = 0; i < 6; i++) {
            let id = i + 100;
            let name = this._groupNames[i];
            let city = this._cities[i];
            let rentalPeriod = this._rentalPeriods[i];
            let peopleNumber = this._peopleNumbers[i];
            let free = this._free[i];
            let info = this._groupsInfo[i];
            let members = this.getUsers(peopleNumber - free);
            let applications = this.getUsers(peopleNumber);
            let polls = this.getUsers(peopleNumber);

            let group = this.createGroup(id, name, city, rentalPeriod, peopleNumber, free, info, members, applications, polls);
            groups.push(group);
        }

        return groups;
    }
}