interface PostUserRepo {
    createUser(id: number, eamil: string): string
    updateUser(id: string): string
}

interface GetuserRepo {
    getUserId(id: number): string
    getUserMail(email: string): string
}

class PostUser implements PostUserRepo {
    // this is not a Get method
    // getUserId(id: number): string {
    //     return 'user found'
    // }
    // getUserMail(email: string): string {
    //     return 'user email Found'
    // }
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
    // this is not Post method
    // createUser(id: number, eamil: string): string {
    //     return 'user created'
    // }
    // updateUser(id: string): string {
    //     return 'user updated'
    // }

}


const postUser = new PostUser()

console.log(postUser.createUser(12,'jishnu'));