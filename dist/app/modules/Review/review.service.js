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
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewService = void 0;
const review_model_1 = require("./review.model");
const createReviewInFoDB = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const userReview = {
        rating: data === null || data === void 0 ? void 0 : data.rating,
        comment: data === null || data === void 0 ? void 0 : data.comment,
        user: id,
    };
    const result = yield review_model_1.review.create(userReview);
    return result;
});
const getAllReview = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.review.find().populate('user');
    //   console.log(result);
    return result;
});
exports.reviewService = {
    createReviewInFoDB,
    getAllReview
};
