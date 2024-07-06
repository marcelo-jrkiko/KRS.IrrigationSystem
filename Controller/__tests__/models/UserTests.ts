import { UserRepository } from "../../src/repositories/Security/UserRepository";


// Descreve um TESTE Unitário para os Usuários
describe('User Model Unit Test', () => {
    const myRepository =  new UserRepository();

    // Teste o [C]RUD (Create) 
    test('create new user', async () => {
        const result = await myRepository.create({
            "firstName" : "Marcelo",
            "lastName" : "Junior",
            "email" : "marcelo@studiocuboweb.com.br"
        });

        return expect(result.id).toBeGreaterThan(0);
    }) ;  
});