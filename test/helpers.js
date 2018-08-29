import supertest from "supertest";
import chai from "chai";
import mongodb from "mongodb";

global.MongoClient = mongodb.MongoClient;
global.mongo_uri = "mongodb://localhost:27017/db_finance";

global.request = supertest("localhost:3003");
global.expect = chai.expect;
