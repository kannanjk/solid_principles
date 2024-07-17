// expamle 1 : using interfaces to achive loose coupling

// high-level modul
interface UserService {
    save(user: user): any;
}
interface user { }
class UserService {
    constructor(private repository: UserService) { }
    save(user: user) {
        this.repository.save(user)
    }
}

// Abstraction (interface)
interface UserRepository {
    save(user: user): void
}

// implimentation of abstrsction
class UserRepoImpl implements UserRepository {
    save(user: user): void {
        // Saving user datas
    }
}

// expamle 2 : using interfaces to achive loose coupling

class UserService2 {
    constructor(private repository: UserRepository) { }
    save(user: user) {
        this.repository.save(user)
    }
}

class UserRepo {
    save(user: user) {
        // save datas to database
    }
}
// this UserRepository is injected into the UserService
const userServ = new UserService2(new UserRepo())