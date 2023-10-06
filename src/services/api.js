import { faker } from '@faker-js/faker'


const delay = (time) =>{
    return new Promise(resolve => setTimeout(resolve, time));
}

export const createUser = (id) => ({
    id,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
});

export const getUsers = () => {
    const array = Array.from(Array(50).keys())
    delay(100);
    return array.map(createUser)
};

export const getProfile = (id) => {
    return createUser(id)
};

export const createMessage = (id) => ({
    id,
    text: faker.lorem.sentence(),

});

export const getMessages = () => {
    const array = Array.from(Array(10).keys())
    delay(100);
    return array.map(createMessage)
};