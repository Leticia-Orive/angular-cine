"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MoviesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = (yield database_1.default).query('SELECT * FROM movies');
            res.json(movies);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const movies = (yield database_1.default).query('SELECT * FROM movies WHERE id = ?', [id]);
            if (Object.keys(movies).length > 0) {
                return res.json(Object.keys(movies)[0]);
            }
            res.status(404).json({ text: "The movies doesn´t exist" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (yield database_1.default).query('Insert into get movies set ?', [req.body]);
            console.log(req.body);
            res.json({ message: ' movies saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            (yield database_1.default).query('DELETE FROM movies WHERE id = ?', [id]);
            res.json({ message: 'The movies is delete' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            (yield database_1.default).query('UPDATE FROM movies set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The movies is update' });
        });
    }
}
;
const moviesController = new MoviesController();
exports.default = moviesController;
