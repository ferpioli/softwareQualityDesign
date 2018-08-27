
describe('Service: Finance',() => {
    describe('POST /oapi/signup', () => {
        describe('status 200', () => {
                let user = {
                    name :'Fernando',
                    email : 'ferpioli@gmail.com',
                    password : 'Qa@2018',
                    confirm_password : 'Qa@2018'
                }
                beforeEach(done => {
                    MongoClient.connect(mongo_uri, (err, db) => {
                        db.collection("users").deleteMany(user, (err, res) => {
                            db.close();
                            done(err);
                        });
                    });
                });
        
            it('cadastrar novo usuario', done => {
                request
                    .post('/oapi/signup')
                    .send(user)
                    .expect(200)
                    .end((err,res) => {
                        done(err);
                    });
            

            });
        });

    });
});