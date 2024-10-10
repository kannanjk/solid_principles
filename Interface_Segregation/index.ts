interface PostUserRepo {
    createUser(id: number, eamil: string): string
    updateUser(id: string): string
}

interface GetuserRepo {
    getUserId(id: number): string
    getUserMail(email: string): string
}

class PostUser implements PostUserRepo {
    createUser(id: number, eamil: string): string {
        return `${eamil} user created`
    }
    updateUser(id: string): string {
        return `${id} user updated`
    }
}

class GetUser implements GetuserRepo {
    getUserId(id: number): string {
        return 'user found'
    }
    getUserMail(email: string): string {
        return 'user email Found'
    }
}


const postUser = new PostUser()

console.log(postUser.createUser(12, 'jishnu'));