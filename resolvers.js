import crypto from 'crypto'

class Friend {
    constructor(id, { firstName, lastName, gender, age, email}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.email = email;
    }
}

const friendDataBase = {};

const resolvers = { 
    getFriend: ({ id }) => {
        return new Friend(id, friendDataBase[id]);
    },
    createFriend: ({input}) => {
    let id = crypto.randomBytes(10).toString('hex');
    friendDataBase[id] = input;
    return new Friend(id, input);
    }
};

export default resolvers;